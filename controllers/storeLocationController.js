const db = require("../config/db");

exports.addStoreLocation = async (req, res) => {
    try {
        const { shop_name, mobile, email, address, open_days, open_time, close_time } = req.body;
        const image = req.file.filename || null;

        const params = [
            image || null,
            shop_name || null,
            mobile || null,
            email || null,
            address || null,
            open_days || null,
            open_time || null,
            close_time || null
        ];

        await db.execute("CALL sp_add_store_location(?, ?, ?, ?, ?, ?, ?, ?)", params);

        res.status(200).json({
            success: true,
            message: "Store location added successfully"
        });
    } catch (error) {
        console.error("Error adding store location:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add store location",
            error: error.message
        });
    }
};

exports.updateStoreLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { shop_name, mobile, email, address, open_days, open_time, close_time } = req.body;
        const image = req.file ? req.file.filename : null;

        const params = [
            id,
            image || null,
            shop_name || null,
            mobile || null,
            email || null,
            address || null,
            open_days || null,
            open_time || null,
            close_time || null
        ];

        await db.execute("CALL sp_update_store_location(?, ?, ?, ?, ?, ?, ?, ?, ?)", params);

        res.status(200).json({
            success: true,
            message: "Store location updated successfully"
        });
    } catch (error) {
        console.error("Error updating store location:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update store location",
            error: error.message
        });
    }
};

exports.getStoreLocation = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM store_location");
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error("Error fetching store location:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch store location",
            error: error.message
        });
    }
};

exports.deleteStoreLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("DELETE FROM store_location WHERE id = ?", [id]);
        res.status(200).json({
            success: true,
            message: "Store location deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting store location:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete store location",
            error: error.message
        });
    }
};
