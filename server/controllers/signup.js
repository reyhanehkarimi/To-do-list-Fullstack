const bcrypt = require("bcrypt");
const User = require("../models/userModel")

const signup = async (req,res) => {
    try {
        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const existingUserByEmail = await User.findOne({ email })
        const existingUserByEmailUsername = await User.findOne({ username })

    if (existingUserByEmail || existingUserByEmailUsername) {
        return res.status(400).json({ message: "Username or email already exists" });
    }
    } catch (error) {
        
    }
}