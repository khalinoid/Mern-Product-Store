import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const app = express();
app.use(express.json());

dotenv.config();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server Started at Port http://localhost:${PORT}`);
});
