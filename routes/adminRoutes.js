const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { registerAdmin, loginAdmin } = require("../controllers/adminController");

router.post("/register", auth("admin"), registerAdmin);
router.post("/login", loginAdmin);

module.exports = router;