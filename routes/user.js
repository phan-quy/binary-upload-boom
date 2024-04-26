const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Route for User Profile

router.get("/profile/:userId", ensureAuth, userController.getProfile);

module.exports = router;


