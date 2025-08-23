const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.defaultAdmin = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM admin WHERE email = ?",
            [process.env.ADMIN_EMAIL]
        );

        if (rows.length === 0) {
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
            await db.query("CALL sp_register_admin(?, ?, ?)", [
                process.env.ADMIN_FULLNAME,
                process.env.ADMIN_EMAIL,
                hashedPassword
            ]);
            console.log("✅ Default admin created");
        } else {
            console.log("ℹ️ Admin already exists");
        }
    } catch (err) {
        console.error("Error creating default admin:", err.message);
    }
};

exports.registerAdmin = async (req, res) => {
    const { full_name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query("CALL sp_register_admin(?, ?, ?)", [full_name, email, hashedPassword]);
        res.status(200).json({ message: "Admin registered successfully" });
    } catch (err) {
        console.error("Error registering admin:", err.message);
        res.status(500).json({ message: "Error registering admin" });
    }
};

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await db.query("CALL sp_login_admin(?)", [email]);
        
        if (!rows[0] || rows[0].length === 0) {
            return res.status(404).json({ success: false, message: "Admin not found or inactive" });
        }
        
        const admin = rows[0][0];
        const match = await bcrypt.compare(password, admin.password_hash);

        if (!match) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ id: admin.id, role: "admin" }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        return res.json({ success: true, message: "Login successful", admin, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
}