const express = require("express");
const router = express.Router();
const { loginUser } = require("../../controller/admincontroller/admincontroller");

router.post("/login", loginUser);

module.exports = router;
