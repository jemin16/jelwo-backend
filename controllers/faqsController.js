const db = require("../config/db");

// Categories 

exports.addCategory = (req, res) => {
    try {
        const { category_name } = req.body;
        db.execute("CALL sp_add_faqs_categories(?)", [category_name]);
        res.status(200).json({ success: true, message: "Category added successfully", category_name });
    } catch (error) {
        console.error("Error adding category:", error);
        res.status(500).json({ success: false, message: "Failed to add category" });
    }
}

exports.updateCategory = (req, res) => {
    try {
        const { id } = req.params;
        const { category_name } = req.body;
        db.execute("CALL sp_update_faqs_categories(?, ?)", [id, category_name]);
        res.status(200).json({ success: true, message: "Category updated successfully", id, category_name });
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ success: false, message: "Failed to update category" });
    }
}

exports.deleteCategory = (req, res) => {
    try {
        const { id } = req.params;
        db.execute("DELETE FROM faqCategories WHERE id = ?", [id]);
        res.status(200).json({ success: true, message: "Category deleted successfully", id });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ success: false, message: "Failed to delete category" });
    }
}

exports.getCategory = (req, res) => {
    try {
        db.execute("SELECT * FROM faqCategories").then(([rows]) => {
            res.status(200).json({ success: true, data: rows });
        });
    } catch (error) {
        console.error("Error getting category:", error);
        res.status(500).json({ success: false, message: "Failed to get category" });
    }
}

// Faqs

exports.addFaqs = (req, res) => {
    try {
        const { question, answer, category_id } = req.body;
        db.execute("CALL sp_add_faqs(?, ?, ?)", [question, answer, category_id]);
        res.status(200).json({ success: true, message: "Faqs added successfully", question, answer, category_id });
    } catch (error) {
        console.error("Error adding faqs:", error);
        res.status(500).json({ success: false, message: "Failed to add faqs", error: error.message });
    }
}

exports.updateFaqs = (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer, category_id } = req.body;
        const params = [
            id || null,
            question || null,
            answer || null,
            category_id || null
        ];
        db.execute("CALL sp_update_faqs(?, ?, ?, ?)", params);
        res.status(200).json({ success: true, message: "Faqs updated successfully", id, question, answer, category_id });
    } catch (error) {
        console.error("Error updating faqs:", error);
        res.status(500).json({ success: false, message: "Failed to update faqs", error: error.message });
    }
}

exports.deleteFaqs = (req, res) => {
    try {
        const { id } = req.params;
        db.execute("DELETE FROM faqs WHERE id = ?", [id]);
        res.status(200).json({ success: true, message: "Faqs deleted successfully", id });
    } catch (error) {
        console.error("Error deleting faqs:", error);
        res.status(500).json({ success: false, message: "Failed to delete faqs" });
    }
}

exports.getFaqs = (req, res) => {
    try {
        db.execute("SELECT * FROM faqs").then(([rows]) => {
            res.status(200).json({ success: true, data: rows });
        });
    } catch (error) {
        console.error("Error getting faqs:", error);
        res.status(500).json({ success: false, message: "Failed to get faqs", error: error.message });
    }
}