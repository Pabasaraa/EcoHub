import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database.js";
import dotenv from "dotenv";

// Import routes
import ProductRoutes from "./product-management-service/routes/product.route.js";
import userRoutes from "./user-management-service/routes/user.route.js";
import seminarRoutes from "./seminar-management/routes/seminar.route.js";
import OrderRoutes from "./order-management-service/routes/order.route.js";
import ReviewRouter from "./review-management-service/routes/review.route.js";
import ArticleRoutes from "./article-management-service/routes/article.route.js";

// Load environment variables from .env file to the process.env object
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// Use routes
app.use("/products", ProductRoutes);
app.use("/users", userRoutes);
app.use("/seminars", seminarRoutes);
app.use("/orders", OrderRoutes);
app.use("/reviews", ReviewRouter);
app.use("/articles", ArticleRoutes);

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default app;
