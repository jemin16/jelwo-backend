const db = require("../config/db");

exports.addShippingReturn = async (req, res) => {
    try {
        const { left_title, left_content, right_title, right_content } = req.body;

        const params = [
            left_title || null,
            left_content || null,
            right_title || null,
            right_content || null
        ];

        await db.execute("CALL sp_add_shipping_return(?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Shipping and return added successfully", data: params });
    } catch (error) {
        console.error("Error Adding Shipping return:", error);
        res.status(500).json({ success: false, message: "Failed to add shipping and return", error: error.message });
    }
};

exports.updateShippingReturn = async (req, res) => {
    try {
        const { id } = req.params;
        const { left_title, left_content, right_title, right_content } = req.body;

        const params = [
            id || null,
            left_title || null,
            left_content || null,
            right_title || null,
            right_content || null
        ];

        await db.execute("CALL sp_update_shipping_return(?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Shipping and return updated successfully", data: params });
    } catch (error) {
        console.error("Error Updating Shipping return:", error);
        res.status(500).json({ success: false, message: "Failed to update shipping and return", error: error.message });
    }
};

exports.deleteShippingReturn = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute("DELETE FROM shipping_return WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Shipping and return not found" });
        }
        res.status(200).json({ success: true, message: "Shipping and return deleted successfully", data: result });
    } catch (error) {
        console.error("Error Deleting Shipping return:", error);
        res.status(500).json({ success: false, message: "Failed to delete shipping and return", error: error.message });
    }
};

exports.getShippingReturn = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM shipping_return");
        res.status(200).json({ success: true, data: rows });
    } catch (error) {
        console.error("Error Getting Shipping Returns:", error);
        res.status(500).json({ success: false, message: "Failed to get Shipping Returns", error: error.message });
    }
};

// Shipping Return Points

exports.addShippingReturnPoints = async (req, res) => {
    try {
        const { shipping_return_id, left_points, left_description, right_points, right_description } = req.body;

        const params = [
            shipping_return_id || null,
            left_points || null,
            left_description || null,
            right_points || null,
            right_description || null
        ];

        await db.execute("CALL sp_add_shipping_return_points(?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Shipping and return points added successfully", data: params });
    } catch (error) {
        console.error("Error Adding Shipping return points:", error);
        res.status(500).json({ success: false, message: "Failed to add shipping and return points", error: error.message });
    }
};

exports.updateShippingReturnPoints = async (req, res) => {
    try {
        const { id } = req.params;
        const { shipping_return_id, left_points, left_description, right_points, right_description } = req.body;

        const params = [
            id || null,
            shipping_return_id || null,
            left_points || null,
            left_description || null,
            right_points || null,
            right_description || null
        ];

        await db.execute("CALL sp_update_shipping_return_points(?, ?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Shipping and return points updated successfully", data: params });
    } catch (error) {
        console.error("Error Updating Shipping return points:", error);
        res.status(500).json({ success: false, message: "Failed to update shipping and return points", error: error.message });
    }
};

exports.deleteShippingReturnPoints = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.execute("DELETE FROM shipping_return_points WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Shipping and return points not found" });
        }
        res.status(200).json({ success: true, message: "Shipping and return points deleted successfully", data: result });
    } catch (error) {
        console.error("Error Deleting Shipping return points:", error);
        res.status(500).json({ success: false, message: "Failed to delete shipping and return points", error: error.message });
    }
};

exports.getShippingReturnPoints = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM shipping_return_points");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error Getting Shipping Return Points:", error);
        res.status(500).json({ success: false, message: "Failed to get shipping return points", error: error.message });
    }
};