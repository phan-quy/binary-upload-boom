// userController.js
const User = require("../models/User");

exports.getProfile = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        // Render the profile page with user data
        res.render("profile", { user });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};


