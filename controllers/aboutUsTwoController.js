const db = require("../config/db");

exports.addAboutTwoContent = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;

        await db.execute("CALL sp_add_about_two_content(?, ?, ?)", [title, description, image]);

        res.status(201).json({
            success: true,
            message: "About two content added successfully",
        });
    } catch (error) {
        console.error("Error adding about two content:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add about two content",
            error: error.message
        });
    }
};

exports.getAboutTwoContent = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM aboutTwoContentSec");
        res.status(200).json({
            success: true,
            aboutTwoContent: rows   
        })
    } catch (error) {
        console.error("Error getting about two content:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get about two content",
            error: error.message
        })
    }
};

exports.updateAboutTwoContent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;

        const params = [
            id || null,
            image || null,
            title || null,
            description || null
        ];

        await db.execute("CALL sp_update_about_two_content(?, ?, ?, ?)", params);

        res.status(200).json({
            success: true,
            message: "About two content updated successfully",
        });
    } catch (error) {
        console.error("Error updating about two content:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update about two content",
            error: error.message
        });
    }
};

exports.deleteAboutTwoContent = async (req, res) => {
    try {
        const { id } = req.params;

        await db.execute("DELETE FROM aboutTwoContentSec WHERE id = ?", [id]);

        res.status(200).json({
            success: true,
            message: "About two content deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting about two content:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete about two content",
            error: error.message
        });
    }
};

// about two key point

exports.addAboutTwoKeyPoint = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;

        const params = [
            title || null,
            description || null,
            image || null
        ];

        await db.execute("CALL sp_add_about_two_key(?, ?, ?)", params);

        res.status(201).json({
            success: true,
            message: "About two key point added successfully",
        });
    } catch (error) {
        console.error("Error adding about two key point:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add about two key point",
            error: error.message
        });
    }
};

exports.updateAboutTwoKeyPoint = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;

        const params = [
            id || null,
            image || null,
            title || null,
            description || null
        ];

        await db.execute("CALL sp_update_about_two_key(?, ?, ?, ?)", params);

        res.status(200).json({
            success: true,
            message: "About two key point updated successfully",
        });
    } catch (error) {
        console.error("Error updating about two key point:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update about two key point",
            error: error.message
        });
    }
};

exports.deleteAboutTwoKeyPoint = async (req, res) => {
    try {
        const { id } = req.params;

        await db.execute("DELETE FROM aboutTwoKeyPoint WHERE id = ?", [id]);

        res.status(200).json({
            success: true,
            message: "About two key point deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting about two key point:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete about two key point",
            error: error.message
        });
    }
};

exports.getAboutTwoKeyPoint = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM aboutTwoKeyPoint");
        res.status(200).json({
            success: true,
            aboutTwoKeyPoint: rows   
        })
    } catch (error) {
        console.error("Error getting about two key point:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get about two key point",
            error: error.message
        })
    }
};

