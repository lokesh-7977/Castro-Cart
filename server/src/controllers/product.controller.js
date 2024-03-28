import mongoose from "mongoose";
import formidable from "formidable";
import Product from "../models/product.schema.js";
import { s3FileDelete, s3FileUpload } from "../services/imageUpload.js";
import handler from "../services/handler.js";
import CustomError from "../services/customError.js";
import fs from "fs";

export const addProduct = handler(async (req, res) => {
  const form = new formidable({ multiples: true, keepExtensions: true });

  form.parse(req, async function (err, feilds, files) {
    if (err) {
      throw new CustomError(err.message, 500);
    }

    let productId = new mongoose.Types.ObjectId().toHexString();

    // `product-${productId}`
    console.log(files.image.path, feilds, files);

    if (
      !feilds.name ||
      !feilds.description ||
      !feilds.price ||
      !feilds.category ||
      !feilds.stock ||
      !files.image ||
      !feilds.collectionId
    ) {
      throw new CustomError("All fields are required", 400);
    }

    let imgArrayRepresentation = Promise.all(
      Object.keys(files).map(async (file, index) => {
        const element = file[fileKey];
        console.log(element);
        const data = fs.readFileSync(element.filepath);

        const upload = await s3FileUpload({
          bucketName: config.S3_BUCKET_NAME,
          key: `product/${productId}/photo_${index + 1}.png`,
          body: data,
          contentType: "image/png",
        });

        console.log(uplaod);
        return {
          url: upload.Location,
        };
      })
    );
    let imgaArray = await imgArrayRepresentation;

    const product = await Product.create({
      _id: productId,
      name: feilds.name,
      ...feilds,
    });
    if (!product) {
      throw new CustomError("Product not created", 400);
    }

    res.json({
      success: true,
      message: "Product created successfully",
      product,
    });
  });
});

export const getAllProducts = handler(async (req, res) => {
  const products = await Product.find();
  res.json(products);

  if (!products) {
    throw new CustomError("No products found", 404);
  }

  res.json({
    success: true,
    message: "Fetched All products",
    products,
  });
});

export const getProductById = handler(async (req, res) => {
  const { id: productId } = req.params;
  const products = await Product.findById(productId);

  res.json(products);

  if (!products) {
    throw new CustomError("No products found", 404);
  }

  res.json({
    success: true,
    message: "Fetched  product By ID",
    products,
  });
});

export const updateProduct = handler(async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findByIdAndUpdate(productId);

  if (!product) {
    throw new CustomError("Product not found", 404);
  }

  res.json({
    success: true,
    message: "Product updated successfully",
    product,
  });
});

export const productByCollectionId = handler(async (req, res) => {
  const { id: collectionId } = req.params;
  const products = await Product.findAll({ collectionId });

  if (!products) {
    throw new CustomError("No products found", 404);
  }

  res.json({
    success: true,
    message: "Fetched  product By Collection ID",
    products,
  });
});

export const deleteProduct = handler(async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findById(productId);

  if (!product) {
    throw new CustomError("Product not found", 404);
  }
  const deletePhotos = Promise.all(
    product.images.map(async (img) => {
      const del = await s3FileDelete({
        bucketName: config.S3_BUCKET_NAME,
        key: `products/${productId.toString()}/photo_${index + 1}.png`,
      });
      console.log(del);
    })
  );

  await deletePhotos;
  await product.remove();

  res.json({
    success: true,
    message: "Product deleted successfully",
    product
  });
});
