const db = require("../config/db");

exports.addComment = async (req, res) => {
    try {
        const { blog_id, user_id, name, email, comment } = req.body;
        await db.execute("CALL sp_add_commens(?, ?, ?, ?, ?)", [blog_id, user_id, name, email, comment]);
        res.status(200).json({ success: true, message: "Comment added successfully" });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ success: false, message: "Failed to add comment" });
    }
}

exports.getComments = async (req, res) => {
    try {
        const { blog_id } = req.params;
        const [rows] = await db.execute("SELECT * FROM comments WHERE blog_id = ?", [blog_id]);
        res.status(200).json({ success: true, comments: rows });
    } catch (error) {
        console.error("Error getting comments:", error);
        res.status(500).json({ success: false, message: "Failed to get comments" });
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("CALL sp_delete_comment(?)", [id]);
        res.status(200).json({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ success: false, message: "Failed to delete comment" });
    }
}

