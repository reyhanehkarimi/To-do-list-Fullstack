const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],    
    },
    password: {
        type: String,
        required: true,
    },
});

// هش کردن پسورد قبل از ذخیره به دیتابیس
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10); 
        this.password = await bcrypt.hash(this.password.trim(), salt); // حذف فضاهای اضافی
        this.email = this.email.toLowerCase(); // ذخیره ایمیل به صورت lowercase
        next();
    } catch (error) {
        console.error("Error hashing password:", error.message); 
        next(error);
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
