const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const adminController = require("./controllers/adminController");

adminController.defaultAdmin();

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send("Hello Jelwo!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

