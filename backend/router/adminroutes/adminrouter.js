const express = require("express");
const router = express.Router();

const { loginUser,logoutUser } = require("../../controller/admincontroller/admincontroller");
const { verifyAdmin, verifyToken } = require('../../middleware/adminmiddleware/adminauthmiddle');
const authController = require('../../controller/admincontroller/admincontroller');

// POST /login
router.post("/login", loginUser);

// GET /dashboard
router.get('/dashboard', verifyAdmin, (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.userId}` });
});

// GET /me
router.get("/me", verifyToken, authController.getCurrentUser);

// backend/router/adminroutes/adminrouter.js

router.get("/logout", authController.logoutUser);


module.exports = router;
