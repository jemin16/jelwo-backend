const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addCategory, updateCategory, deleteCategory, getCategory } = require("../controllers/faqsController");
const { addFaqs, updateFaqs, deleteFaqs, getFaqs } = require("../controllers/faqsController");

// Faqs Category
router.post("/add_category", auth("admin"), addCategory);
router.put("/update_category/:id", auth("admin"), updateCategory);
router.delete("/delete_category/:id", auth("admin"), deleteCategory);
router.get("/get_category", getCategory);

// Faqs
router.post("/add_faqs", auth("admin"), addFaqs);
router.put("/update_faqs/:id", auth("admin"), updateFaqs);
router.delete("/delete_faqs/:id", auth("admin"), deleteFaqs);
router.get("/get_faqs", getFaqs);

module.exports = router;