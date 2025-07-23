const User = require('../../model/admin/adminschema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'mysecretkey'; // use .env in production

const loginUser = async (req, res) => {
  const { name, role, password } = req.body;

  if (!name || !role || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.findOne({ name, role });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Wrong password' });

  const createToken = (user) => {
  return jwt.sign(
    { userId: user._id, role: user.role }, // ✅ role include kiya
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const token = createToken(user); // ✅ Pass full user object


  res.cookie("token", token, {
  httpOnly: false, // ✅ for dev time only (so JS can read it)
  secure: false,   // ❌ only true in HTTPS
  sameSite: "Lax",
});

  res.status(200).json({ message: 'Login successful',token, user: { name: user.name, roll: user.role } });
};

// backend/controllers/authController.js
getCurrentUser = async (req, res) => {
  try {
    const user = req.user; 
    res.json({ role: user.role });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};


logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, 
  });
  res.status(200).json({ message: "Logged out successfully" });
};


module.exports = { loginUser,getCurrentUser,logoutUser };
