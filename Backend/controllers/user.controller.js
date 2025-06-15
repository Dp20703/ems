const userModel = require('../models/user.model')

//register user
module.exports.createUser = async (req, res) => {
    const { firstName, email, password } = req.body;

    if (!firstName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
        return res.status(409).json({ message: 'Email already exists!' });
    }

    try {
        const hashedPassword = await userModel.hashPassword(password);

        const user = await userModel.create({ firstName, email, password: hashedPassword });

        const token = await user.generateAuthToken(user._id);

        return res.status(200).json({ success: true, data: user, token });

    } catch (error) {
        console.error("Error in register_user controller:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
};


//login user
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: 'All fields are required!' })
    }
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        res.status(404).json({ message: "Invalid email or password" })
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        res.status(404).json({ message: "Invalid email or password" })
    }
    const token = user.generateAuthToken();

    //set the token as a cookie
    res.cookie('token', token);

    //remove the password from the response
    user.password = undefined;

    //return the response
    res.status(200).json({ success: true, token, user });

}

//get user profile
module.exports.getUserProfile = async (req, res) => {
    res.status(200).json({ success: true, user: req.user })
}

//logout user
module.exports.logoutUser = async (req, res) => {
    try {
        // Clear token cookie
        res.clearCookie('token');

        return res.status(200).json({ message: "User logout successful" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Error logging out", error });
    }
}

// find users
module.exports.findUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        console.log("Users:", users);
        res.status(200).json({ success: true, users });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

