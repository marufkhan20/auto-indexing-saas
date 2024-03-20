const supabase = require("../supabase");

const { format, parseISO } = require("date-fns");

const supabaseUserSchema = {
  first_name: "firstName",
  last_name: "lastName",
  email: "email",
  password: "password",
  profile_pic: "profilePic",
  role: "role",
  plan: "plan",
  subscriptions: "subscriptions",
  refresh_date: "refreshDate",
};

const User = {
  tableName: "users", // Replace 'users' with the actual table name in your Supabase database
  async create(userData) {
    console.log("user data", userData);
    // Convert data to match Supabase schema
    const formattedData = Object.keys(userData).reduce((acc, key) => {
      const supabaseKey = supabaseUserSchema[key] || key;
      const value = userData[key];
      acc[supabaseKey] = value;
      console.log("acc", acc);
      return acc;
    }, {});

    // Insert data into Supabase table
    const { data, error } = await supabase
      .from(User.tableName)
      .upsert([formattedData], { onConflict: ["email"] }); // Assuming email is unique

    if (error) {
      throw error;
    }

    return data[0];
  },

  async findById(userId) {
    // Retrieve user by ID
    const { data, error } = await supabase
      .from(User.tableName)
      .select("*")
      .eq("id", userId);

    if (error) {
      throw error;
    }

    return data[0];
  },

  // Add other CRUD methods as needed

  // ...

  async getAllUsers() {
    // Get all users
    const { data, error } = await supabase.from(User.tableName).select("*");

    if (error) {
      throw error;
    }

    return data;
  },
};

module.exports = User;
