const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const getproduct = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ msg: error.message });
  }
});

const newproduct = asyncHandler( async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // respond back to client
    // res.status(500).json({ msg: error.message });
  }
});

const getbyID = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ msg: error.message });
  }
});
const updateproduct = asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // we cannot find product id in database
    if (!product) {
      return res
        .status(404)
        .json({ msg: `cannot find product with this ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ msg: error.message });
  }
});

const deleteproduct = asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ msg: `product id not found in database ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ msg: error.message });
  }
});
module.exports = {
  getproduct,
  newproduct,
  getbyID,
  updateproduct,
  deleteproduct,
};
