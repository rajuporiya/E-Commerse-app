const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const {signin, signout, signup, isSignedIn} = require("../Controllers/auth")


 router.post("/signup", [
    check("name", "name should be atleast 3 characters").isLength({min: 3}),
    check("email", "Email is not correct").isEmail(),
    check("password", "password should be atleast 6 characters").isLength({min: 6}),
],
 signup)


router.post("/signin",[
    check("email", "Email is not correct").isEmail(),
    check("password", "password field is required").isLength({min: 1}),
], signin)



router.get("/signout", signout)


// router.get("/testroute", isSignedIn, (req, res) => {
//    /// res.send("A Protected Route")
//     res.json(req.auth)
// }) 

module.exports = router;