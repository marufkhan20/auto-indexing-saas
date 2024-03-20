const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const sendMail = require("../services/emailService");
const supabase = require("../supabase");

// self controller
const selfController = async (req, res) => {
  try {
    // check user available
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("id", req.user?.id)
      .single();

    if (!user) {
      return res.status(400).json({
        error: {
          email: "User not found! Please try again!!",
        },
      });
    }

    // prepare the user object to generate token
    const userObject = {
      id: user.id,
      name: user.name,
      profilePic: user?.profilePic,
      email: user.email,
      role: user?.role,
      subscriptionPlan: user?.subscriptionPlan,
      refreshDate: user?.refreshDate,
      googleAccessToken: user?.googleAccessToken,
    };

    res.status(200).json(userObject);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      err,
    });
  }
};

// register controller
const registerController = async (req, res) => {
  try {
    const { name: fullName, email, password } = req.body;

    // check user already existing
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (data?.id) {
      return res.status(400).json({
        error: {
          email: "Email is already exist, Please try to another email!",
        },
      });
    }

    // password hash
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        // Create New User
        const { error } = await supabase.from("users").upsert([
          {
            email: email,
            name: fullName,
            password: hash,
          },
        ]);

        if (!error) {
          const { data } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .single();

          res.status(201).json(data);
        }
      });
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// login controller
const loginController = async (req, res) => {
  const { email, password } = req.body;

  // check user available
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    return res.status(400).json({
      error: {
        email: "User not found! Please try again!!",
      },
    });
  }

  // check password correct or incorrect
  bcrypt.compare(password, user.password, async function (err, result) {
    if (err) {
      return res.status(500).json({
        error: "Server Error Occurred!",
      });
    }

    if (!result) {
      return res.status(400).json({
        error: {
          password: "Email or Password Incorrect!",
        },
      });
    }

    // prepare the user object to generate token
    const userObject = {
      id: user.id,
      name: user.name,
      profilePic: user?.profilePic,
      email: user.email,
      role: user?.role,
      subscriptionPlan: user?.subscriptionPlan,
      refreshDate: user?.refreshDate,
      googleAccessToken: user?.googleAccessToken,
    };

    // generate token
    const token = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });

    res.cookie(
      "auth",
      JSON.stringify({
        user: userObject,
        token,
      }),
      { maxAge: 900000 }
    );

    res.status(200).json({
      user: userObject,
      token,
    });
  });
};

// update user controller
const updateUserController = async (req, res) => {
  try {
    const { id } = req.user || {};

    // Find the user by ID
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!user) {
      throw new Error("User not found");
    }

    // update user
    const updatedData = { ...user, ...req.body };

    const { data: updatedUser, updateError } = await supabase
      .from("users")
      .update(updatedData)
      .eq("id", id)
      .single();

    if (updateError) {
      throw updateError;
    }

    res.status(200).json({ ...user, ...req.body });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// forgot password controller
// const fortgotPasswordController = async (req, res) => {
//   try {
//     const { email } = req.body || {};

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         error: {
//           email: "User Not found!!",
//         },
//       });
//     }

//     if (user?._id) {
//       // prepare the user object to generate token
//       const userObject = {
//         _id: user._id,
//         email: user.email,
//       };

//       // generate token
//       const token = jwt.sign(userObject, process.env.JWT_SECRET, {
//         expiresIn: "10m",
//       });

//       // generate 4 digit random verify code
//       const verifyLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

//       // send mail with verify code
//       sendMail({
//         from: process.env.ADMIN_EMAIL,
//         to: email,
//         subject: "Forgot Your Account Password.",
//         html: require("../services/forgotEmailTemplate")(verifyLink),
//       });

//       res.status(200).json(user);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "Server error occurred!!",
//     });
//   }
// };

// // reset password controller
// const resetPasswordController = async (req, res) => {
//   try {
//     let { token } = req.params || {};
//     const { password } = req.body || {};

//     if (!token) {
//       return res.status(401).json({
//         error: {
//           password: "Verification Failure!!",
//         },
//       });
//     }

//     token = token.replace("Bearer ", "");

//     const decode = jwt.verify(token, process.env.JWT_SECRET);

//     if (decode?._id) {
//       // password hash
//       const saltRounds = 10;
//       bcrypt.genSalt(saltRounds, function (err, salt) {
//         bcrypt.hash(password, salt, async function (err, hash) {
//           if (err) {
//             return res.status(500).json({
//               error: err,
//             });
//           }

//           // get user
//           const user = await User.findById(decode?._id);

//           // Create New User
//           user.password = hash;

//           await user.save();

//           // create new activity
//           const newActivity = new Activity({
//             time: new Date(),
//             user: user?._id,
//             activity: "Reset Password",
//           });

//           await newActivity.save();

//           res.status(200).json(user);
//         });
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({
//       error: {
//         password: "Token Expire!!",
//       },
//     });
//   }
// };

// // change password controller
// const changePasswordController = async (req, res) => {
//   try {
//     const { _id } = req.user || {};
//     const { password } = req.body || {};

//     // update password
//     const saltRounds = 10;
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//       bcrypt.hash(password, salt, async function (err, hash) {
//         if (err) {
//           return res.status(500).json({
//             error: err,
//           });
//         }

//         const updatedUser = await User.findByIdAndUpdate(_id, {
//           $set: { password: hash },
//         });

//         if (updatedUser?._id) {
//           // create new activity
//           const newActivity = new Activity({
//             time: new Date(),
//             user: updatedUser?._id,
//             activity: "Change Password",
//           });

//           await newActivity.save();

//           res.status(201).json(updatedUser);
//         }
//       });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "Server error occurred!!",
//     });
//   }
// };

module.exports = {
  selfController,
  registerController,
  loginController,
  // fortgotPasswordController,
  // resetPasswordController,
  // changePasswordController,
  updateUserController,
};
