const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addTermsConditionTitle, updateTermsConditionTitle, deleteTermsConditionTitle, getTermsConditionTitle, addTermsConditionContent, updateTermsConditionContent, deleteTermsConditionContent, getTermsConditionContent } = require("../controllers/termsConditionController");

router.post("/add", auth("admin"), addTermsConditionTitle);
router.put("/update/:id", auth("admin"), updateTermsConditionTitle);
router.delete("/delete/:id", auth("admin"), deleteTermsConditionTitle);
router.get("/get", getTermsConditionTitle);

// Terms and Condition Content
router.post("/add_content", auth("admin"), addTermsConditionContent);
router.put("/update_content/:id", auth("admin"), updateTermsConditionContent);
router.delete("/delete_content/:id", auth("admin"), deleteTermsConditionContent);
router.get("/get_content", getTermsConditionContent);

module.exports = router;