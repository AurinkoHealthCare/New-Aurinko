// const User = require('../../model/admin/adminschema');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// // Token Creator
// const createToken = (user) => {
//   return jwt.sign(
//     {
//       userId: user._id,
//       name: user.name,
//       role: user.role,
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: '1d' }
//   );
// };

// // Login Handler
// const loginUser = async (req, res) => {
//   const { name, role, password } = req.body;

//   if (!name || !role || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const user = await User.findOne({ name, role });
//   if (!user) return res.status(404).json({ message: 'User not found' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ message: 'Wrong password' });

//   const token = createToken(user);

//   res.cookie("token", token, {
//     httpOnly: true,   // secure from XSS
//     sameSite: "Lax",
//     secure: false,    // true in production (HTTPS)
//   });

//   res.status(200).json({
//     message: 'Login successful',
//     token,
//     user: {
//       name: user.name,
//       role: user.role,
//     },
//   });
// };

// // Get Current User
// const getCurrentUser = async (req, res) => {
//   try {
//     const user = req.user;
//     res.json({ role: user.role, name: user.name });
//   } catch (err) {
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };

// // Logout Handler
// const logoutUser = (req, res) => {
//   res.clearCookie("token", {
//     httpOnly: true,
//     sameSite: "Lax",
//     secure: false,
//   });
//   res.status(200).json({ message: "Logged out successfully" });
// };

// module.exports = {
//   loginUser,
//   getCurrentUser,
//   logoutUser
// };


const Admin = require('../../model/admin/adminschema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (admin) => {
  return jwt.sign(
    {
      userId: admin._id,
      name: admin.name,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const loginUser = async (req, res) => {
  const { name, role, password } = req.body;

  if (!name || !role || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const admin = await Admin.findOne({ name, role });
  if (!admin) return res.status(404).json({ message: 'Admin not found' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: 'Wrong password' });

  const token = createToken(admin);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });

  res.status(200).json({
    message: 'Login successful',
    token,
    user: {
      name: admin.name,
      role: admin.role,
    },
  });
};

const getCurrentUser = (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      name: user.name,
      role: user.role
    });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  loginUser,
  getCurrentUser,
  logoutUser
};
