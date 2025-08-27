const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addProductVariants, getProductVariants, updateProductVariants, deleteProductVariants } = require("../controllers/productVariantsController");

router.post("/add", auth("admin"), addProductVariants);
router.get("/get/:product_id", getProductVariants);
router.put("/update/:id", auth("admin"), updateProductVariants);
router.delete("/delete/:id", auth("admin"), deleteProductVariants);

module.exports = router;