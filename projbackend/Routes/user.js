const express = require("express");
const router = express.Router();

const {getUserById, getUser, updateUser, userPurchaseList} = require("../Controllers/user")
const {isAdmin, isAuthenticated, isSignedIn} = require("../Controllers/auth")

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser )

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser )

router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList )

// router.get("/users", getAllUsers );



module.exports = router;