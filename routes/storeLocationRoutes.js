const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/store_location");

const { addStoreLocation, updateStoreLocation, getStoreLocation, deleteStoreLocation } = require("../controllers/storeLocationController");

router.post("/add", auth("admin"), upload.single("image"), addStoreLocation);
router.put("/update/:id", auth("admin"), upload.single("image"), updateStoreLocation);
router.get("/get", getStoreLocation);
router.delete("/delete/:id", auth("admin"), deleteStoreLocation);

module.exports = router;