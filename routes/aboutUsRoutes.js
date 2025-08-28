const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");

const uploadImage = require("../middlewares/uploadImage");

const upload = uploadImage("uploads/about_story");
const uploadTestimonialImage = uploadImage("uploads/about_testimonial");
const uploadTeamMemberImage = uploadImage("uploads/about_team_member");

const { addAboutStory, updateAboutStory, getAboutStory, deleteAboutStory } = require("../controllers/aboutUsController");
const { addAboutTestimonial, updateAboutTestimonial, getAboutTestimonial, deleteAboutTestimonial } = require("../controllers/aboutUsController");
const { addAboutTeamsMember, updateAboutTeamsMember } = require("../controllers/aboutUsController");


router.post("/add", auth("admin"), upload.single("image"), addAboutStory);
router.put("/update/:id", auth("admin"), upload.single("image"), updateAboutStory);
router.get("/get", getAboutStory);
router.delete("/delete/:id", auth("admin"), deleteAboutStory);

router.post("/add_testimonial", auth("admin"), uploadTestimonialImage.single("image"), addAboutTestimonial);
router.put("/update_testimonial/:id", auth("admin"), uploadTestimonialImage.single("image"), updateAboutTestimonial);
router.get("/get_testimonial", getAboutTestimonial);
router.delete("/delete_testimonial/:id", auth("admin"), deleteAboutTestimonial);

router.post("/add_team_member", auth("admin"), uploadTeamMemberImage.single("image"), addAboutTeamsMember);
router.put("/update_team_member/:id", auth("admin"), uploadTeamMemberImage.single("image"), updateAboutTeamsMember);

module.exports = router;