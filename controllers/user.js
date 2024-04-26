const User = require("../models/User");
const Post = require("../models/Post"); // Import the Post model

exports.getProfile = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        
        // Fetch posts associated with the user
        const posts = await Post.find({ user: userId });

        // Render the profile page with user data and posts
        res.render("profile", { user, posts });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};
