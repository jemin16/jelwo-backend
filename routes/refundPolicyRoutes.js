const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addRefundPolicy, updateRefundPolicy, deleteRefundPolicy, getRefundPolicy, addRefundPolicyPoints, updateRefundPolicyPoints, deleteRefundPolicyPoints, getRefundPolicyPoints } = require("../controllers/refundPolicyController");

router.post("/add", auth("admin"), addRefundPolicy);
router.put("/update/:id", auth("admin"), updateRefundPolicy);
router.delete("/delete/:id", auth("admin"), deleteRefundPolicy);
router.get("/get", getRefundPolicy);

// Refund Policy Points
router.post("/add_points", auth("admin"), addRefundPolicyPoints);
router.put("/update_points/:id", auth("admin"), updateRefundPolicyPoints);
router.delete("/delete_points/:id", auth("admin"), deleteRefundPolicyPoints);
router.get("/get_points", getRefundPolicyPoints);

module.exports = router;