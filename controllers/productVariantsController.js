const db = require("../config/db");

exports.addProductVariants = async (req, res) => {
    try {
        const { product_id, size, color } = req.body;
        await db.execute("CALL sp_add_product_variants(?, ?, ?)", [product_id, size, color]);
        res.status(200).json({ success: true, message: "Product variants added successfully" });
    } catch (error) {
        console.error("Error adding product variants:", error);
        res.status(500).json({ success: false, message: "Failed to add product variants" });
    }
};

exports.getProductVariants = async (req, res) => {
    try {
        const { product_id } = req.params;
        const [rows] = await db.execute("SELECT * FROM product_variants WHERE product_id = ?", [product_id]);
        res.status(200).json({ success: true, product_variants: rows });
    } catch (error) {
        console.error("Error getting product variants:", error);
        res.status(500).json({ success: false, message: "Failed to get product variants" });
    }
};

exports.updateProductVariants = async (req, res) => {
    try {
        const { id } = req.params;
        const { product_id, size, color } = req.body;
        await db.execute("CALL sp_update_product_variants(?, ?, ?, ?)", [id, product_id, size, color]);
        res.status(200).json({ success: true, message: "Product variants updated successfully" });
    } catch (error) {
        console.error("Error updating product variants:", error);
        res.status(500).json({ success: false, message: "Failed to update product variants" });
    }
};

exports.deleteProductVariants = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("CALL sp_delete_product_variants(?)", [id]);
        res.status(200).json({ success: true, message: "Product variants deleted successfully" });
    } catch (error) {
        console.error("Error deleting product variants:", error);
        res.status(500).json({ success: false, message: "Failed to delete product variants" });
    }
};
