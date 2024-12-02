const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Task = require("../models/task");

const router = express.Router();

router.post("/api/users", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", User: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put("/api/users/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;

        const user = await User.findById(id)
        if(!user) return res.status(404).json({ message: "User not found" })

        if(username) user.username = username;
        if(email) user.email = email;
        if (password) {
            user.password = await bcrypt.hash(password, 10)
        }    
        await user.save();
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.delete("/api/users/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user) return res.status(404).json({ message: "User not found" })
        res.status(200).json({ message: "User deleted successfully" })
        

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get("/api/users/:id/tasks", async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({ message: "User not found" });

        const tasks = await Task.find({ userId: id });
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;