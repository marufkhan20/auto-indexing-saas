const supabase = require("../supabase");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(
  "sk_test_51LRnDyH3L9RCLevZoGrUbNqVAl445o6nt2MVPw8bwOyvYbJbQV5AKDsQ2Hj4XEG2Mhz6aiYtMZpj8KryafbcZVue00ebStF5jd"
);

// get all subscriptions plan controller
const getAllSubscriptionsPlanController = async (req, res) => {
  try {
    const { data } = await supabase.from("subscription_plans").select("*");

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

// subscribe package controller
const subscribePackageController = async (req, res) => {
  try {
    const { productId, packageId, userId } = req.body || {};

    // generate token
    const token = jwt.sign(
      {
        productId,
        packageId,
        userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: productId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.CLIENT_URL}/payment-success/${token}/${userId}/${packageId}`,
      cancel_url: `${process.env.CLIENT_URL}/failed`,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Subscription creation failed" });
  }
};

// update user subscription plan controller
const updateUserSubscriptionPlanController = async (req, res) => {
  try {
    const { userId, packageId } = req.body || {};

    // find package by packageId
    const { data: packageData } = await supabase
      .from("subscription_plans")
      .select("*")
      .eq("id", packageId)
      .single();

    // Find the user by ID
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      throw error;
    }

    if (!user) {
      throw new Error("User not found");
    }

    // calculate subscription end date
    const currentDate = new Date();

    // Add 30 days to the current date
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 30);

    // update user subscriptions
    const newData = {
      subscriptionPlan: packageData?.name,
      refreshDate: futureDate,
    };

    const updatedData = { ...user, ...newData };

    // Update the user in the database
    const { data: updatedUser, updateError } = await supabase
      .from("users")
      .update(updatedData)
      .eq("id", userId)
      .single();

    if (updateError) {
      throw updateError;
    }

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

module.exports = {
  getAllSubscriptionsPlanController,
  subscribePackageController,
  updateUserSubscriptionPlanController,
};
