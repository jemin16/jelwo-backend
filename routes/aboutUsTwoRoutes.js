const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/about_us_two");
const uploadKeyPointImage = uploadImage("uploads/about_us_two_key_point");

const { addAboutTwoContent, getAboutTwoContent, updateAboutTwoContent, deleteAboutTwoContent } = require("../controllers/aboutUsTwoController");
const { addAboutTwoKeyPoint, getAboutTwoKeyPoint, updateAboutTwoKeyPoint, deleteAboutTwoKeyPoint } = require("../controllers/aboutUsTwoController");

router.post("/add", auth("admin"), upload.single("image"), addAboutTwoContent);
router.get("/get", getAboutTwoContent);
router.put("/update/:id", auth("admin"), upload.single("image"), updateAboutTwoContent);
router.delete("/delete/:id", auth("admin"), deleteAboutTwoContent);

router.post("/add_key_point", auth("admin"), uploadKeyPointImage.single("image"), addAboutTwoKeyPoint);
router.get("/get_key_point", getAboutTwoKeyPoint);
router.put("/update_key_point/:id", auth("admin"), uploadKeyPointImage.single("image"), updateAboutTwoKeyPoint);
router.delete("/delete_key_point/:id", auth("admin"), deleteAboutTwoKeyPoint);

module.exports = router;