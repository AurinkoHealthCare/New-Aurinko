const express = require("express");
const router = express.Router();
const  loginAdmin = require("../../controller/admincontroller/adminauth");
const verifyToken=require('../../middlewaer/adminmidlewaer/adminvarefy')
router.post("/login", loginAdmin);

module.exports = router;
