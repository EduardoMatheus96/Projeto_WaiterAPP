import path from 'node:path';
import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
  })
});

// List Categories
router.get("/categories", listCategories);

// Create Category
router.post("/categories", createCategory);

// List Products
router.get("/products", listProducts);

// Create Product
router.post("/products", upload.single('image'), createProduct);

// Get Products by Category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send('OK');
});

// List Orders
router.get("/orders", (req, res) => {
  res.send('OK');
});

// Create Order
router.post("/orders", (req, res) => {
  res.send('OK');
});

// Change Order Status
router.patch("/orders/orderId", (req, res) => {
  res.send('OK');
});

// Delete/Cancel Order
router.delete("/orders/orderId", (req, res) => {
  res.send('OK');
});
