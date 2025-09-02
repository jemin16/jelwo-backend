const db = require("../config/db");

exports.addTermsConditionTitle = async (req, res) => {
    try {
        const { left_title, right_title } = req.body;

        const params = [
            left_title || null,
            right_title || null
        ];

        await db.execute("CALL sp_add_terms_condition_title(?, ?)", params);
        res.status(200).json({ success: true, message: "Terms and Conditon added successfully", data: params });
    } catch (error) {
        console.error("Error Adding Terms and Condtion : ", error);
        res.status(500).json({ success: false, message: "Failed to add terms and condition", error: error.message });
    }
};

exports.updateTermsConditionTitle = async (req, res) => {
    try {
        const { id } = req.params;
        const { left_title, right_title } = req.body;

        const params = [
            id || null,
            left_title || null,
            right_title || null
        ];

        await db.execute("CALL sp_update_terms_cdn_title(?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Terms and condition updated successfully", data: params });
    } catch (error) {
        console.error("Error Updating terms and condition", error);
        res.status(500).json({ success: false, message: "failed to update terms and condition", error: error.message })
    }
};

exports.deleteTermsConditionTitle = async (req, res) => {
    try {
        const { id } = req.params;

        await db.execute("DELETE FROM terms_condition_title WHERE id = ?", [id]);
        res.status(200).json({ success: true, message: "terms and condition deleted successfully" });
    } catch (error) {
        console.error("Error Deleting terms and condition:", error);
        res.status(500).json({ success: false, message: "failed to delete terms and condition", error: error.message });
    }
};

exports.getTermsConditionTitle = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM terms_condition_title");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching terms and condition title:", error);
        res.status(500).json({ success: false, message: "failed to fetch terms and condition title", error: error.message });
    }
};

// Terms and Condition Content

exports.addTermsConditionContent = async (req, res) => {
    try {
        const { title_id, left_content, right_content } = req.body;

        const params = [
            title_id || null,
            left_content || null,
            right_content || null
        ];

        await db.execute("CALL sp_add_terms_cdn_content(?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Terms and condition content added successfully", data: params });
    } catch (error) {
        console.error("Error Adding Terms and Condtion : ", error);
        res.status(500).json({ success: false, message: "Failed to add terms and condition", error: error.message });
    }
};

exports.updateTermsConditionContent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title_id, left_content, right_content } = req.body;

        const params = [
            id || null,
            title_id || null,
            left_content || null,
            right_content || null
        ];

        await db.execute("CALL sp_update_terms_cdn_content(?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Terms and condition content updated successfully", data: params });
    } catch (error) {
        console.error("Error Updating terms and condition content:", error);
        res.status(500).json({ success: false, message: "failed to update terms and condition content", error: error.message })
    }
};

exports.deleteTermsConditionContent = async (req, res) => {
    try {
        const { id } = req.params;

        await db.execute("DELETE FROM terms_condition_content WHERE id = ?", [id]);
        res.status(200).json({ success: true, message: "terms and condition content deleted successfully" });
    } catch (error) {
        console.error("Error Deleting terms and condition content:", error);
        res.status(500).json({ success: false, message: "failed to delete terms and condition content", error: error.message });
    }
};

exports.getTermsConditionContent = async (req, res) => {
    try {
        const [result] = await db.execute("SELECT * FROM terms_condition_content");
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching terms and condition content:", error);
        res.status(500).json({ success: false, message: "failed to fetch terms and condition content", error: error.message });
    }
};