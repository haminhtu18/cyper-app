const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const cloudinary = require("cloudinary");

// Create Prouct
const createProduct = asyncHandler(async (req, res) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];
  for (let image of images) {
    const result = await cloudinary.v2.uploader.upload(image, {
      resource_type: "image",
      folder: "minhtu_cyber_images",
    });
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  const productData = req.body;
  productData.images = imagesLinks;

  // Create Product
  const product = await Product.create({ ...productData, userId: req.user.id });
  res.status(201).json(product);
});

// Get all Products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ userId: req.user.id }).sort(
    "-createdAt"
  );
  res.status(200).json(products);
});

// Get single product
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  // if product doesnt exist
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  if (product.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  res.status(200).json(product);
});

// Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  // if product doesnt exist
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  // if (product.userId.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }
  for (let i = 0; i < product.images.length; i++) {
    try {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    } catch (error) {
      console.error("Error deleting image from Cloudinary:", error);
    }
  }

  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Product deleted." });
});

// Update Product
const updateProduct = asyncHandler(async (req, res) => {
  const { name, category, desc, tags, currentPrice, discountPrice, stock } =
    req.body;
  const { id } = req.params;
  console.log(name);
  const product = await Product.findById(id);
  console.log(product);

  // if product doesnt exist
  // if (!product) {
  //   res.status(404);
  //   throw new Error("Product not found");
  // }
  // // Match product to its user
  // if (product.userId.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  // // Handle Image upload
  // let fileData = {};
  // if (req.file) {
  //   // Save image to cloudinary
  //   let uploadedFile;
  //   try {
  //     uploadedFile = await cloudinary.uploader.upload(req.file.path, {
  //       folder: "Pinvent App",
  //       resource_type: "image",
  //     });
  //   } catch (error) {
  //     res.status(500);
  //     throw new Error("Image could not be uploaded");
  //   }

  //   fileData = {
  //     fileName: req.file.originalname,
  //     filePath: uploadedFile.secure_url,
  //     fileType: req.file.mimetype,
  //     fileSize: fileSizeFormatter(req.file.size, 2),
  //   };
  // }

  // //handle update sizes
  // let newSizes = [];

  // Update Product
  const updatedProduct = await Product.findByIdAndUpdate(
    { _id: id },
    {
      name,
      category,
      desc,
      tags,
      currentPrice,
      discountPrice,
      stock,
      // image: Object.keys(fileData).length === 0 ? product?.image : fileData,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  console.log(updatedProduct);
  res.status(200).json(updatedProduct);
});

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
