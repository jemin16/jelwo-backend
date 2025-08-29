const express = require("express");
const router = express.Router();

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/contact_support");
const uploadGetInTouch = uploadImage("uploads/contact_getintouch");

const { auth } = require("../middlewares/authMiddleware");

const { addContactSupport, getContactSupport, updateContactSupport, deleteContactSupport } = require("../controllers/contactUsController");
const { addContactGetInTouch, getContactGetInTouch, updateContactGetInTouch, deleteContactGetInTouch } = require("../controllers/contactUsController");
const { addContactKeepInTouch, getContactKeepInTouch, deleteContactKeepInTouch } = require("../controllers/contactUsController");
const { addContactDetail, getContactDetail, updateContactDetail, deleteContactDetail } = require("../controllers/contactUsController");

router.post("/add", auth("admin"), upload.single("icon"), addContactSupport);
router.get("/get", getContactSupport);
router.put("/update/:id", auth("admin"), upload.single("icon"), updateContactSupport);
router.delete("/delete/:id", auth("admin"), deleteContactSupport);

router.post("/add_getintouch", auth("admin"), uploadGetInTouch.single("flag"), addContactGetInTouch);
router.get("/get_getintouch", getContactGetInTouch);
router.put("/update_getintouch/:id", auth("admin"), uploadGetInTouch.single("flag"), updateContactGetInTouch);
router.delete("/delete_getintouch/:id", auth("admin"), deleteContactGetInTouch);

router.post("/add_keepintouch", addContactKeepInTouch);
router.get("/get_keepintouch", auth("admin"), getContactKeepInTouch);
router.delete("/delete_keepintouch/:id", auth("admin"), deleteContactKeepInTouch);

router.post("/add_detail", auth("admin"), addContactDetail);
router.get("/get_detail", getContactDetail);
router.put("/update_detail/:id", auth("admin"), updateContactDetail);
router.delete("/delete_detail/:id", auth("admin"), deleteContactDetail);

module.exports = router;