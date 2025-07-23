// createAdmin.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("./model/admin/adminschema"); // ✅ Adjust path if needed

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
  process.exit(1);
});

const createAdmin = async () => {
  try {
    const name = "sumit";
    const role = "admin2";
    const plainPassword = "sumit7065";

    // Check if already exists
    const existing = await User.findOne({ name });
    if (existing) {
      console.log("❌ Admin already exists!");
      return process.exit();
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Create user
    const newUser = new User({
      name,
      role,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("✅ Admin created:", {
      name: newUser.name,
      role: newUser.role,
    });

    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    process.exit(1);
  }
};

createAdmin();
