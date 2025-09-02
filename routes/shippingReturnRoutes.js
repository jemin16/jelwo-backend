const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware")

const { addShippingReturn, updateShippingReturn, deleteShippingReturn, getShippingReturn, addShippingReturnPoints, updateShippingReturnPoints, deleteShippingReturnPoints, getShippingReturnPoints } = require("../controllers/shippingReturnController");

router.post("/add", auth("admin"), addShippingReturn);
router.put("/update/:id", auth("admin"), updateShippingReturn);
router.delete("/delete/:id", auth("admin"), deleteShippingReturn);
router.get("/get", getShippingReturn);

// Shipping Return Points
router.post("/add_points", auth("admin"), addShippingReturnPoints);
router.put("/update_points/:id", auth("admin"), updateShippingReturnPoints);
router.delete("/delete_points/:id", auth("admin"), deleteShippingReturnPoints);
router.get("/get_points", getShippingReturnPoints);

module.exports = router;