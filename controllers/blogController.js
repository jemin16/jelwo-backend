const db = require("../config/db");

exports.addBlog = async (req, res) => {
    try {
        const { name, date, comment_count, title, contentOne, contentTwo, quotes, quotesContent, tags } = req.body;

        const image = req.files?.image?.[0]?.filename || null;
        const secondImage = req.files?.secondImage?.[0]?.filename || null;
        const thirdImage = req.files?.thirdImage?.[0]?.filename || null;

        const params = {
            image,
            date: date || null,
            name: name || null,
            comment_count: comment_count ? parseInt(comment_count) : 0,
            title: title || null,
            contentOne: contentOne || null,
            contentTwo: contentTwo || null,
            secondImage,
            thirdImage,
            quotes: quotes || null,
            quotesContent: quotesContent || null,
            tags: tags ? JSON.stringify(tags) : null
        };

        await db.execute(
            "CALL sp_add_blog(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                params.image,
                params.date,
                params.name,
                params.comment_count,
                params.title,
                params.contentOne,
                params.contentTwo,
                params.secondImage,
                params.thirdImage,
                params.quotes,
                params.quotesContent,
                params.tags
            ]
        );

        res.status(200).json({
            success: true,
            message: "Blog added successfully",
            image: image ? `/uploads/blog/${image}` : null
        });
    } catch (error) {
        console.error("Error adding blog:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add blog",
            error: error.message
        });
    }
};

exports.getBlog = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM blog");
        res.status(200).json({ success: true, blog: rows });
    } catch (error) {
        console.error("Error getting blog:", error);
        res.status(500).json({ success: false, message: "Failed to get blog" });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.execute("SELECT * FROM blog WHERE id = ?", [id]);
        res.status(200).json({ success: true, blog: rows });
    } catch (error) {
        console.error("Error getting blog:", error);
        res.status(500).json({ success: false, message: "Failed to get blog" });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("DELETE FROM blog WHERE id = ?", [id]);
        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ success: false, message: "Failed to delete blog" });
    }
};
