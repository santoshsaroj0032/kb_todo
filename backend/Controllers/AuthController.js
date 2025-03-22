const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup Route
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword }); //  Corrected instance creation
        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            success: true
        });
    } catch (err) {
        console.error(err); //  Log the error for debugging
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Login Route
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await UserModel.findOne({ email });
        const errMsg = "Authentication failed! Email or password is incorrect.";

        if (!User) {
            return res.status(401).json({ message: errMsg, success: false });
        }

        const isPasswordValid = await bcrypt.compare(password, User.password); //  Fixed incorrect variable name
        if (!isPasswordValid) {
            return res.status(401).json({ message: errMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: User.email, userId: User._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: User.name
        });
    } catch (err) {
        console.error(err); //  Log the error for debugging
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = { signup, login };
