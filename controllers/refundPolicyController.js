const db = require("../config/db");

exports.addRefundPolicy = async (req, res) => {
    try {
        const { left_content, right_content, left_title, left_description, right_title, right_description } = req.body;

        const params = [
            left_content || null,
            right_content || null,
            left_title || null,
            left_description || null,
            right_title || null,
            right_description || null
        ];

        await db.execute("CALL sp_add_refund_policy(?, ?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Refund Policy Added Successfully", data: params });
    } catch (error) {
        console.error("Error adding refund policy:", error);
        res.status(500).json({ success: false, message: "Failed to add refund policy", error: error.message });
    }
};

exports.updateRefundPolicy = async (req, res) => {
    try {
        const { id } = req.params;
        const { left_content, right_content, left_title, left_description, right_title, right_description } = req.body;

        const params = [
            id || null,
            left_content || null,
            right_content || null,
            left_title || null,
            left_description || null,
            right_title || null,
            right_description || null
        ];

        await db.execute("CALL sp_update_refund_policy(?, ?, ?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Refund Policy Updated Successfully", data: params });
    } catch (error) {
        console.error("Error updating refund policy:", error);
        res.status(500).json({ success: false, message: "Failed to update refund policy", error: error.message });
    }
};

exports.deleteRefundPolicy = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute("DELETE FROM refund_policy WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Refund policy not found" });
        }
        res.status(200).json({ success: true, message: "Refund policy deleted successfully" });
    } catch (error) {
        console.error("Error deleting refund policy:", error);
        res.status(500).json({ success: false, message: "Failed to delete refund policy", error: error.message });
    }
};

exports.getRefundPolicy = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM refund_policy");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching refund policy:", error);
        res.status(500).json({ success: false, message: "Failed to fetch refund policy", error: error.message });
    }
};

// Refund Policy Points

exports.addRefundPolicyPoints = async (req, res) => {
    try {
        const { refund_policy_id, left_title, left_description, right_title, right_description } = req.body;

        const params = [
            refund_policy_id || null,
            left_title || null,
            left_description || null,
            right_title || null,
            right_description || null
        ];

        await db.execute("CALL sp_add_refund_policy_points(?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Refund Policy Points Added Successfully", data: params });
    } catch (error) {
        console.error("Error adding refund policy points:", error);
        res.status(500).json({ success: false, message: "Failed to add refund policy points", error: error.message });
    }
};

exports.updateRefundPolicyPoints = async (req, res) => {
    try {
        const { id } = req.params;
        const { left_title, left_description, right_title, right_description } = req.body;

        const params = [
            id,
            left_title || null,
            left_description || null,
            right_title || null,
            right_description || null
        ];

        await db.execute("CALL sp_update_refund_policy_points(?, ?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Refund Policy Points Updated Successfully", data: params });
    } catch (error) {
        console.error("Error updating refund policy points:", error);
        res.status(500).json({ success: false, message: "Failed to update refund policy points", error: error.message });
    }
};

exports.deleteRefundPolicyPoints = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute("DELETE FROM refund_policy_points WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Refund policy points not found" });
        }
        res.status(200).json({ success: true, message: "Refund policy points deleted successfully" });
    } catch (error) {
        console.error("Error deleting refund policy points:", error);
        res.status(500).json({ success: false, message: "Failed to delete refund policy points", error: error.message });
    }
};

exports.getRefundPolicyPoints = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM refund_policy_points");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching refund policy points:", error);
        res.status(500).json({ success: false, message: "Failed to fetch refund policy points", error: error.message });
    }
};