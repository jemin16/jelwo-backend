const express = require("express");
const router = express.Router();

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/products");

const { auth } = require("../middlewares/authMiddleware");

const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/productsController");

router.post("/add", auth("admin"), upload.single("image"), addProduct);
router.get("/get", getProducts);
router.get("/get/:id", getProductById);
router.put("/update/:id", auth("admin"), upload.single("image"), updateProduct);
router.delete("/delete/:id", auth("admin"), deleteProduct);

module.exports = router;