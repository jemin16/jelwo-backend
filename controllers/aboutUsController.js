const db = require("../config/db");

// about story section 

exports.addAboutStory = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;
        await db.execute(
            "CALL sp_add_about_story(?, ?, ?)",
            [image, title, description]
        );
        res.status(200).json({
            success: true,
            message: "About story added successfully"
        });
    } catch (error) {
        console.error("Error adding about story:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add about story",
            error: error.message
        });
    }
};

exports.updateAboutStory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const image = req.file ? req.file.filename : null;

        const updateData = {
            id: id,
            image: image,
            title: title || null,
            description: description || null
        };

        await db.execute(
            "CALL sp_update_about_story(?, ?, ?, ?)",
            [
                updateData.id,
                updateData.image,
                updateData.title,
                updateData.description
            ]
        );

        res.status(200).json({
            success: true,
            message: "About story updated successfully"
        });
    } catch (error) {
        console.error("Error updating about story:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update about story",
            error: error.message
        });
    }
};

exports.getAboutStory = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM aboutStory");
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error("Error fetching about story:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch about story",
            error: error.message
        });
    }
};

exports.deleteAboutStory = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("DELETE FROM aboutStory WHERE id = ?", [id]);
        res.status(200).json({
            success: true,
            message: "About story deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting about story:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete about story",
            error: error.message
        });
    }
};

// about testimonial section

exports.addAboutTestimonial = async (req, res) => {
    try {
        const { title, description, name } = req.body;
        const image = req.file ? req.file.filename : null;
        await db.execute(
            "CALL sp_add_about_testimonial(?, ?, ?, ?)",
            [image, title, description, name]
        );
        res.status(200).json({
            success: true,
            message: "About testimonial added successfully"
        });
    } catch (error) {
        console.error("Error adding about testimonial:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add about testimonial",
            error: error.message
        });
    }
};


exports.updateAboutTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const { title = null, description = null, name = null } = req.body;
        const image = req.file ? req.file.filename : null;

        await db.execute(
            "CALL sp_update_about_testimonial(?, ?, ?, ?, ?)",
            [id, image, title, description, name].map(param => param === undefined ? null : param)
        );

        res.status(200).json({
            success: true,
            message: "About testimonial updated successfully"
        });
    } catch (error) {
        console.error("Error updating about testimonial:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update about testimonial",
            error: error.message
        });
    }
};

exports.getAboutTestimonial = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM aboutTestimonial");
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error("Error fetching about testimonial:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch about testimonial",
            error: error.message
        });
    }
};


exports.deleteAboutTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("DELETE FROM aboutTestimonial WHERE id = ?", [id]);
        res.status(200).json({
            success: true,
            message: "About testimonial deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting about testimonial:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete about testimonial",
            error: error.message
        });
    }
};

// about teams member section

exports.addAboutTeamsMember = async (req, res) => {
    try {
        const { name, position } = req.body;
        const image = req.file ? req.file.filename : null;
        await db.execute(
            "CALL sp_add_about_team_mem(?, ?, ?)",
            [image, name, position]
        );
        res.status(200).json({
            success: true,
            message: "About teams member added successfully"
        });
    } catch (error) {
        console.error("Error adding about teams member:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add about teams member",
            error: error.message
        });
    }
};

exports.updateAboutTeamsMember = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, position } = req.body;
        const image = req.file ? req.file.filename : null;

        await db.execute(
            "CALL sp_update_about_team_memb(?, ?, ?, ?)",
            [id, image, name, position].map(param => param === undefined ? null : param)
        );

        res.status(200).json({
            success: true,
            message: "About teams member updated successfully"
        });
    } catch (error) {
        console.error("Error updating about teams member:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update about teams member",
            error: error.message
        });
    }
};

exports.getAboutTeamsMember = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM aboutTeamsMember");
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error("Error fetching about teams member:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch about teams member",
            error: error.message
        });
    }
};

exports.deleteAboutTeamsMember = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute("DELETE FROM aboutTeamsMember WHERE id = ?", [id]);
        res.status(200).json({
            success: true,
            message: "About teams member deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting about teams member:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete about teams member",
            error: error.message
        });
    }
};