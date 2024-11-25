/*eslint-disable*/

const Task = require("../models/task");

exports.createTask = async (req, res) => {
    try {
      const { title, description, completed, important, deadline, dirId } = req.body;
  
      const newTask = new Task({
        title,
        description,
        completed,
        important,
        deadline,
        dirId,
      });
  
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTasksByDirectory = async (req, res) => {
    const { directoryId } = req.params;

    try {
        const tasks = await Task.find({ dirId: directoryId });

        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found for this directory" });
        }

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, completed } = req.body;
        const task = await Task.findByIdAndUpdate(id, { name, completed }, { new: true });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
