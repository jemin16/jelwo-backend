const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const { addComment, getComments, deleteComment } = require("../controllers/commentController");

router.post("/add", auth("user"), addComment);
router.get("/get/:blog_id", getComments);
router.delete("/delete/:id", auth("user"), deleteComment);

module.exports = router;