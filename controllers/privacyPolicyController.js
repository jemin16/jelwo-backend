const db = require("../config/db");

// Privacy_Policy Controller 

exports.addPrivacyPolicy = async (req, res) => {
    try {
        const { left_title, left_content, right_title, right_content } = req.body;
        await db.execute("CALL sp_add_privacy_policy(?, ?, ?, ?)", [left_title, left_content, right_title, right_content]);
        res.status(200).json({ success: true, message: "Privacy Policy added successfully", left_title, left_content, right_title, right_content });
    } catch (error) {
        console.error("Error adding privacy policy:", error);
        res.status(500).json({ success: false, message: "Failed to add privacy policy", error: error.message });
    }
};

exports.updatePrivacyPolicy = async (req, res) => {
    try {
        const { id } = req.params;
        const { left_title, left_content, right_title, right_content, content_index } = req.body;

        const contentIndex = content_index !== undefined ? parseInt(content_index) : null;

        let leftContentParam = null;
        if (left_content !== undefined) {
            leftContentParam = contentIndex !== null ? JSON.stringify([left_content]) : left_content;
        }

        let rightContentParam = null;
        if (right_content !== undefined) {
            rightContentParam = contentIndex !== null ? JSON.stringify([right_content]) : right_content;
        }

        const [result] = await db.execute(
            "CALL sp_update_privacy_policy(?, ?, ?, ?, ?, ?)",
            [id, left_title || null, leftContentParam, right_title || null, rightContentParam, contentIndex]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Privacy policy not found" });
        }

        res.status(200).json({
            success: true,
            message: "Privacy policy updated successfully",
            data: result[0] || {}
        });
    } catch (error) {
        console.error("Error updating privacy policy:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update privacy policy",
            error: error.message
        });
    }
};

exports.getPrivacyPolicy = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM privacy_policy");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching privacy policy:", error);
        res.status(500).json({ success: false, message: "Failed to fetch privacy policy", error: error.message });
    }
};

exports.deletePrivacyPolicy = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute("DELETE FROM privacy_policy WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Privacy policy not found" });
        }
        res.status(200).json({ success: true, message: "Privacy policy deleted successfully" });
    } catch (error) {
        console.error("Error deleting privacy policy:", error);
        res.status(500).json({ success: false, message: "Failed to delete privacy policy", error: error.message });
    }
};

// Privacy_Policy_Points Controller 

exports.addPrivacyPolicyPoints = async (req, res) => {
    try {
        const { privacy_policy_id, left_title, left_content, right_title, right_content } = req.body;

        const params = [
            privacy_policy_id || null,
            left_title || null,
            left_content || null,
            right_title || null,
            right_content || null
        ];

        await db.execute("CALL sp_add_privacy_policy_points(?, ?, ?, ?, ?)", params);
        res.status(200).json({
            success: true,
            message: "Privacy policy points added successfully",
            data: { privacy_policy_id, left_title, left_content, right_title, right_content }
        });
    } catch (error) {
        console.error("Error adding privacy policy points:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add privacy policy points",
            error: error.message
        });
    }
};

exports.updatePrivacyPolicyPoints = async (req, res) => {
    try {
        const { id } = req.params;
        const { privacy_policy_id, left_title, left_content, right_title, right_content } = req.body;

        const params = [
            id || null,
            privacy_policy_id || null,
            left_title || null,
            left_content || null,
            right_title || null,
            right_content || null
        ];

        await db.execute("CALL sp_update_privacy_policy_points(?, ?, ?, ?, ?, ?)", params);
        res.status(200).json({
            success: true,
            message: "Privacy policy points updated successfully",
            data: { privacy_policy_id, left_title, left_content, right_title, right_content }
        });
    } catch (error) {
        console.error("Error updating privacy policy points:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update privacy policy points",
            error: error.message
        });
    }
};

exports.deletePrivacyPolicyPoints = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute("DELETE FROM privacy_policy_points WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Privacy policy points not found" });
        }
        res.status(200).json({ success: true, message: "Privacy policy points deleted successfully" });
    } catch (error) {
        console.error("Error deleting privacy policy points:", error);
        res.status(500).json({ success: false, message: "Failed to delete privacy policy points", error: error.message });
    }
};

exports.getPrivacyPolicyPoints = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM privacy_policy_points");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching privacy policy points:", error);
        res.status(500).json({ success: false, message: "Failed to fetch privacy policy points", error: error.message });
    }
};

// Privacy_Policy_Func_Tble Controller 

exports.addPrivacyPolicyFuncTable = async (req, res) => {
    try {
        const { privacy_policy_id, left_name, left_function, right_name, right_function } = req.body;

        const params = [
            privacy_policy_id || null,
            left_name || null,
            left_function || null,
            right_name || null,
            right_function || null
        ];

        await db.execute("CALL sp_add_privacy_policy_func_table(?, ?, ?, ?, ?)", params);
        res.status(200).json({
            success: true,
            message: "Privacy policy func table added successfully",
            data: { privacy_policy_id, left_name, left_function, right_name, right_function }
        });
    } catch (error) {
        console.error("Error adding privacy policy func table:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add privacy policy func table",
            error: error.message
        });
    }
};

exports.updatePrivacyPolicyFuncTable = async (req, res) => {
    try {
        const { id } = req.params;
        const { privacy_policy_id, left_name, left_function, right_name, right_function } = req.body;

        const params = [
            id || null,
            privacy_policy_id || null,
            left_name || null,
            left_function || null,
            right_name || null,
            right_function || null
        ];

        await db.execute("CALL sp_update_privacy_policy_func_tble(?, ?, ?, ?, ?, ?)", params);
        res.status(200).json({
            success: true,
            message: "Privacy policy func table updated successfully",
            data: { privacy_policy_id, left_name, left_function, right_name, right_function }
        });
    } catch (error) {
        console.error("Error updating privacy policy func table:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update privacy policy func table",
            error: error.message
        });
    }
};

exports.deletePrivacyPolicyFuncTable = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute("DELETE FROM privacy_policy_func_tble WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Privacy policy func table not found" });
        }
        res.status(200).json({ success: true, message: "Privacy policy func table deleted successfully" });
    } catch (error) {
        console.error("Error deleting privacy policy func table:", error);
        res.status(500).json({ success: false, message: "Failed to delete privacy policy func table", error: error.message });
    }
};

exports.getPrivacyPolicyFuncTable = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM privacy_policy_func_tble");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching privacy policy func table:", error);
        res.status(500).json({ success: false, message: "Failed to fetch privacy policy func table", error: error.message });
    }
};