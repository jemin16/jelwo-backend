const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addPrivacyPolicy, updatePrivacyPolicy, getPrivacyPolicy, deletePrivacyPolicy } = require("../controllers/privacyPolicyController");
const { addPrivacyPolicyPoints, updatePrivacyPolicyPoints, deletePrivacyPolicyPoints, getPrivacyPolicyPoints } = require("../controllers/privacyPolicyController");
const { addPrivacyPolicyFuncTable, updatePrivacyPolicyFuncTable, deletePrivacyPolicyFuncTable, getPrivacyPolicyFuncTable } = require("../controllers/privacyPolicyController");

router.post("/add", auth("admin"), addPrivacyPolicy);
router.put("/update/:id", auth("admin"), updatePrivacyPolicy);
router.get("/get", getPrivacyPolicy);
router.delete("/delete/:id", auth("admin"), deletePrivacyPolicy);

// Privacy_Policy_Points
router.post("/add_points", auth("admin"), addPrivacyPolicyPoints);
router.put("/update_points/:id", auth("admin"), updatePrivacyPolicyPoints);
router.delete("/delete_points/:id", auth("admin"), deletePrivacyPolicyPoints);
router.get("/get_points", getPrivacyPolicyPoints);

// Privacy_Policy_Func_Tble
router.post("/add_func_table", auth("admin"), addPrivacyPolicyFuncTable);
router.put("/update_func_table/:id", auth("admin"), updatePrivacyPolicyFuncTable);
router.delete("/delete_func_table/:id", auth("admin"), deletePrivacyPolicyFuncTable);
router.get("/get_func_table", getPrivacyPolicyFuncTable);

module.exports = router;