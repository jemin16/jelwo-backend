const db = require("../config/db");
const { generateOTP } = require("../utils/otp");
const { sendOTPEmail } = require("../utils/otp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    const { first_name, last_name, email, password, accepted_terms } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        const isVerified = false;

        await db.query(
            "CALL sp_register_user(?, ?, ?, ?, ?, ?, ?, ?)",
            [first_name, last_name, email, hashedPassword, accepted_terms, otp, otpExpiry, isVerified]
        );

        await sendOTPEmail(email, otp);

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

exports.verifyUser = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const [rows] = await db.query("CALL sp_verify_user(?, ?)", [email, otp]);
        if (rows.length === 0) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        res.status(200).json({ message: "User verified successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query("CALL sp_login_user(?)", [email]);
        const user = rows[0][0];

        if (!user || user.message === "User not found") {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.is_verified) {
            return res.status(403).json({ success: false, message: "Please verify your email first" });
        }

        const match = await bcrypt.compare(String(password), user.password_hash);

        if (!match) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        return res.json({ success: true, message: "Login successful", user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
}