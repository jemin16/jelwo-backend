const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(express.static("uploads"));


const adminController = require("./controllers/adminController");
adminController.defaultAdmin();

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const productVariantsRoutes = require("./routes/productVariantsRoutes");
const productVariantsImagesRoutes = require("./routes/productVariantsImagesRoutes");

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/product-variants", productVariantsRoutes);
app.use("/api/product-variants-images", productVariantsImagesRoutes);

app.get("/", (req, res) => {
    res.send("Hello Jelwo!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

