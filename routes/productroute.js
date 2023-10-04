const express = require("express");
const router = express.Router();
const {
  getproduct,
  newproduct,
  getbyID,
  updateproduct,
  deleteproduct,
} = require("../controllers/productController");
//routes
// save new product to database
router.post("/", newproduct);
// get all products
router.get("/", getproduct);
// get product by id
router.get("/:id", getbyID);
// update product by id
router.put("/:id", updateproduct);
// delete product by id
router.delete("/:id", deleteproduct);

module.exports = router;
