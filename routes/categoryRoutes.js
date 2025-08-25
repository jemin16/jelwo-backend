const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");

router.post("/add", auth("admin"), addCategory);
router.get("/get", getCategories);
router.put("/update/:id", auth("admin"), updateCategory);
router.delete("/delete/:id", auth("admin"), deleteCategory);

module.exports = router;