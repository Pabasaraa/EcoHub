import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database.js";
import dotenv from "dotenv";

// Import routes
import productRoutes from "./product-management-service/routes/product.route.js";
import userRoutes from "./user-management-service/routes/user.route.js";
import seminarRoutes from "./seminar-management/routes/seminar.route.js";

// Load environment variables from .env file to the process.env object
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// app.use("/", (res) => {
//   res.send("EcoHub backend service!");
// });

// Use routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/seminars", seminarRoutes);
// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
