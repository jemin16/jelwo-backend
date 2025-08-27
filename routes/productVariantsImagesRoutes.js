const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/product_variants_images");

const { addVariantImages, getVariantImagesByProductId, deleteVariantImages } = require("../controllers/productVariantsImageController");

router.post("/add", auth("admin"), upload.array("images", 10), addVariantImages);
router.get("/get/:product_id", getVariantImagesByProductId);
router.delete("/delete/:product_id", auth("admin"), deleteVariantImages);

module.exports = router;