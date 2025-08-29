const db = require("../config/db");

exports.addContactSupport = (req, res) => {
    try {
        const { title, description } = req.body;
        const icon = req.file ? req.file.filename : null;

        db.execute(
            "CALL sp_add_contact_support(?, ?, ?)",
            [icon, title, description]
        );

        res.status(200).json({
            success: true,
            message: "Contact support added successfully"
        });

    } catch (error) {
        console.error("Error adding contact support:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add contact support",
            error: error.message
        });
    }
};

exports.getContactSupport = (req, res) => {
    try {
        db.execute("SELECT * FROM contact_support").then(([rows]) => {
            res.status(200).json({
                success: true,
                message: "Contact support retrieved successfully",
                data: rows
            });
        });
    } catch (error) {
        console.error("Error getting contact support:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get contact support",
            error: error.message
        });
    }
};

exports.updateContactSupport = (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const icon = req.file ? req.file.filename : null;

        const params = [
            id || null,
            icon || null,
            title || null,
            description || null
        ];

        db.execute(
            "CALL sp_update_contact_support(?, ?, ?, ?)",
            params
        );

        res.status(200).json({
            success: true,
            message: "Contact support updated successfully"
        });
    } catch (error) {
        console.error("Error updating contact support:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update contact support",
            error: error.message
        });
    }
};

exports.deleteContactSupport = (req, res) => {
    try {
        const { id } = req.params;
        db.execute("DELETE FROM contact_support WHERE id = ?", [id]);
        res.status(200).json({
            success: true,
            message: "Contact support deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting contact support:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete contact support",
            error: error.message
        });
    }
};

// Contact Get In Touch
exports.addContactGetInTouch = (req, res) => {
    try {
        const { address, phone, email, country } = req.body;
        const flag = req.file ? req.file.filename : null;

        db.execute(
            "CALL sp_add_contact_getintouch(?, ?, ?, ?, ?)",
            [flag, address, phone, email, country]
        );

        res.status(200).json({
            success: true,
            message: "Contact get in touch added successfully"
        });
    } catch (error) {
        console.error("Error adding contact get in touch:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add contact get in touch",
            error: error.message
        });
    }
};

exports.getContactGetInTouch = (req, res) => {
    try {
        db.execute("SELECT * FROM contactgetintouch").then(([rows]) => {
            res.status(200).json({
                success: true,
                message: "Contact get in touch retrieved successfully",
                data: rows
            });
        });
    } catch (error) {
        console.error("Error getting contact get in touch:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get contact get in touch",
            error: error.message
        });
    }
};

exports.deleteContactGetInTouch = (req, res) => {
    try {
        const { id } = req.params;
        db.execute("DELETE FROM contactgetintouch WHERE id = ?", [id]);
        res.status(200).json({
            success: true,
            message: "Contact get in touch deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting contact get in touch:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete contact get in touch",
            error: error.message
        });
    }
};

exports.updateContactGetInTouch = (req, res) => {
    try {
        const { id } = req.params;
        const { address, phone, email, country } = req.body;
        const flag = req.file ? req.file.filename : null;

        const params = [
            id || null,
            flag || null,
            address || null,
            phone || null,
            email || null,
            country || null
        ];

        db.execute(
            "CALL sp_update_contact_getintouch(?, ?, ?, ?, ?, ?)",
            params
        );

        res.status(200).json({
            success: true,
            message: "Contact get in touch updated successfully"
        });
    } catch (error) {
        console.error("Error updating contact get in touch:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update contact get in touch",
            error: error.message
        });
    }
};

// Contact Keep In Touch

exports.addContactKeepInTouch = (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;

        const params = [
            fullname || null,
            email || null,
            phone || null,
            message || null
        ];

        if (!fullname || !email) {
            return res.status(400).json({
                success: false,
                message: "Full name and email are required fields"
            });
        }

        db.execute(
            "CALL sp_add_contact_keepintouch(?, ?, ?, ?)",
            params
        );

        res.status(200).json({
            success: true,
            message: "Contact keep in touch added successfully"
        });
    } catch (error) {
        console.error("Error adding contact keep in touch:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add contact keep in touch",
            error: error.message
        });
    }
};

exports.getContactKeepInTouch = (req, res) => {
    try {
        db.execute("SELECT * FROM contactkeepintouch").then(([rows]) => {
            res.status(200).json({
                success: true,
                message: "Contact keep in touch retrieved successfully",
                data: rows
            });
        });
    } catch (error) {
        console.error("Error getting contact keep in touch:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get contact keep in touch",
            error: error.message
        });
    }
};
