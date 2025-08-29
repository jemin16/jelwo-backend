const express = require("express");
const router = express.Router();

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/contact_support");
const uploadGetInTouch = uploadImage("uploads/contact_getintouch");

const { auth } = require("../middlewares/authMiddleware");

const { addContactSupport, getContactSupport, updateContactSupport, deleteContactSupport } = require("../controllers/contactUsController");
const { addContactGetInTouch, getContactGetInTouch, updateContactGetInTouch, deleteContactGetInTouch } = require("../controllers/contactUsController");
const { addContactKeepInTouch, getContactKeepInTouch } = require("../controllers/contactUsController");

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

module.exports = router;