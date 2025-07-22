const User = require("../../model/admin/adminschema");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { name, password, role } = req.body;

  try {
    const user = await User.findOne({ name, role });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "10d" }
    );

    // Send token as JSON (You can send in cookie also if needed)
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = { loginUser };
