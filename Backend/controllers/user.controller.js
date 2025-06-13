const userModel = require('../models/user.model')
module.exports.createUser = async (req, res) => {
    const { firstName, email, password } = req.body;

    if (!firstName || !email || !password) {
        // console.log('All fields are required');
        res.status(400).json({ message: 'All fields are required!' })
    }
    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
        res.status(409).json({ message: 'email is already exists!' })
    }

    const hashedpassword = await userModel.hashPassword(password)
    try {
        const user = await userModel.create({ firstName, email, password: hashedpassword });
        const token = await user.generateAuthToken(user._id);

        res.status(200).json({ success: true, data: user, token });

    } catch (error) {
        console.log("Error is register_user controller:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}

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