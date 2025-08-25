const db = require("../config/db");

exports.addCategory = async (req, res) => {
    const { name } = req.body;
    try {
        await db.execute("CALL sp_add_category(?)", [name]);
        res.status(200).json({ success: true, message: "Category added successfully", name });
    } catch (error) {
        console.error("Error adding category:", error);
        res.status(500).json({ success: false, message: "Failed to add category" });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const [rows] = await db.query("CALL sp_get_category()");
        res.status(200).json({ success: true, categories: rows[0] });
    } catch (error) {
        console.error("Error getting categories:", error);
        res.status(500).json({ success: false, message: "Failed to get categories" });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        await db.execute("CALL sp_update_category(?, ?)", [id, name]);
        res.status(200).json({ success: true, message: "Category updated successfully", name });
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ success: false, message: "Failed to update category" });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("CALL sp_delete_category(?)", [id]);
        res.status(200).json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ success: false, message: "Failed to delete category" });
    }
};