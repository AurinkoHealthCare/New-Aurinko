const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../../model/admin/adminschema");

const loginAdmin = async (req, res) => {
    const { name, password } = req.body;

    try {
        const admin = await Admin.findOne({ name });
        if (!admin) {
            return res.status(401).json({ message: "Invalid name" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: admin._id, name: admin.name },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            // process.env.NODE_ENV === "production"
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Login successful", name: admin.name });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = loginAdmin;
