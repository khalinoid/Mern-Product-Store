import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Product from "./models/product.models.js";

const app = express();
app.use(express.json());

dotenv.config();

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    res
      .status(400)
      .json({ success: false, message: "Fields should not be empty!" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(`Error:`, error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// app.delete("/api/products/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     await Product.findByIdAndDelete(id);
//     res.status(200).json({ success: true, message: "Product Deleted" });
//   } catch (error) {}
// });

app.listen(5000, async () => {
  await connectDb();
  console.log(`Server Started at Port 5000`);
});
