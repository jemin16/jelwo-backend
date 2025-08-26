const db = require("../config/db");
const path = require('path');

exports.addProduct = async (req, res) => {
    try {
        const { name, category_id, price, old_price, stock, rating, description, vendor, type, sku, barcode, weight } = req.body;
        const image = req.file ? req.file.filename : null;

        await db.execute(
            "CALL sp_add_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [name, category_id, price, old_price, stock, rating, description, image, vendor, type, sku, barcode, weight]
        );

        res.status(200).json({
            success: true,
            message: "Product added successfully",
            image: image ? `/uploads/products/${image}` : null
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error.message
        });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const [rows] = await db.query("CALL sp_get_product()");
        res.status(200).json({ success: true, products: rows[0] });
    } catch (error) {
        console.error("Error getting products:", error);
        res.status(500).json({ success: false, message: "Failed to get products" });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query("CALL sp_get_product_by_id(?)", [id]);
        res.status(200).json({ success: true, product: rows[0] });
    } catch (error) {
        console.error("Error getting product:", error);
        res.status(500).json({ success: false, message: "Failed to get product" });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category_id, price, old_price, stock, rating, description, vendor, type, sku, barcode, weight } = req.body;
        const image = req.file ? req.file.filename : null;

        const processValue = (val) => (val === '' || val === undefined ? null : val);

        const updateData = {
            id,
            name: processValue(name),
            category_id: processValue(category_id),
            price: processValue(price),
            old_price: processValue(old_price),
            stock: processValue(stock),
            rating: processValue(rating),
            description: processValue(description),
            image: processValue(image),
            vendor: processValue(vendor),
            type: processValue(type),
            sku: processValue(sku),
            barcode: processValue(barcode),
            weight: processValue(weight)
        };


        const values = [
            updateData.id,
            updateData.name,
            updateData.category_id,
            updateData.price,
            updateData.old_price,
            updateData.stock,
            updateData.rating,
            updateData.description,
            updateData.image,
            updateData.vendor,
            updateData.type,
            updateData.sku,
            updateData.barcode,
            updateData.weight
        ];

        await db.execute(
            "CALL sp_update_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            values
        );

        res.status(200).json({ success: true, message: "Product updated successfully" });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, message: "Failed to update product" });
    }
};