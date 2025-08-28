const express = require("express");
const router = express.Router();

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/blog");

const { auth } = require("../middlewares/authMiddleware");

const { addBlog, getBlog, getBlogById, deleteBlog } = require("../controllers/blogController");

router.post("/add", auth("admin"), upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'secondImage', maxCount: 1 },
    { name: 'thirdImage', maxCount: 1 }
]), addBlog);

router.get("/get", getBlog);
router.get("/get/:id", getBlogById);
router.delete("/delete/:id", auth("admin"), deleteBlog);

module.exports = router;
