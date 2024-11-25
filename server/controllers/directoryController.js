const Directory = require("../models/directory");

exports.createDirectory = async (req, res) => {
    try {
        const { name } = req.body;
        const directory = new Directory({ name });
        await directory.save();
        res.status(201).json(directory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDirectories = async (req, res) => {
    try {
        const directories = await Directory.find();
        res.status(200).json(directories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDirectory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const directory = await Directory.findByIdAndUpdate(id, { name }, { new: true });
        if (!directory) {
            return res.status(404).json({ message: "Directory not found" });
        }
        res.json(directory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDirectory = async (req, res) => {
    try {
        const { id } = req.params;
        const directory = await Directory.findByIdAndDelete(id);
        if (!directory) {
            return res.status(404).json({ message: "Directory not found" });
        }
        res.status(200).json({ message: "Directory deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
