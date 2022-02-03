const express = require("express");
const router = express.Router();

//const {getCategoryById, createCategory, getCategory, getAllCategories, updateCategory, removeCategory} = require("../Controllers/category");
const {isSignedIn , isAuthenticated, isAdmin} = require("../Controllers/auth");
const {getUserById} = require("../Controllers/user");
const { getAllUniqueCategories, photo, getProductById, createProduct, getProduct, getAllProducts, updateProduct, removeProduct } = require("../Controllers/product");

//Params
router.param("userId", getUserById);
router.param("productId", getProductById)



//actual Routes
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);

router.get("/product/photo/:productId", photo);

router.get("/product/:productId", getProduct)

router.get("/products", getAllProducts)

router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, updateProduct);

router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, removeProduct);

router.get("/products/categories", getAllUniqueCategories)

module.exports = router