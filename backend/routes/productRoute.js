const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { upload } = require("../utils/fileUploads");
// app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
router.post(
  "/create-product",
  protect,
  upload.array("images", 5),
  createProduct
);
router.patch(
  "/update-product/:id",
  protect,
  upload.array("images", 5),
  updateProduct
);
router.get("/all-products", protect, getProducts);
router.get("/product/:id", protect, getProduct);
router.delete("/delete-product/:id", protect, deleteProduct);

module.exports = router;
