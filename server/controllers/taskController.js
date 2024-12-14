
const Task = require("../models/task");
const User = require("../models/userModel")

exports.createTask = async (req, res) => {
    try {
      const { title, description, completed, important, deadline, dirId, dueDate  } = req.body;

      const userId = req.userId;

      if(!userId) {
        return res.status(400).json({ message: "User Id is required to create a task" })
      }
  
      const newTask = new Task({
        title,
        description,
        completed: completed || false,
        important: important || false,
        deadline,
        dirId,
        userId,
        dueDate 
      });
  
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.getTasks = async (req, res) => {
    try {
        const userId = req.userId;
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTasksByDirectory = async (req, res) => {
    const { directoryId } = req.params;

    try {
        const tasks = await Task.find({ dirId: directoryId, userId: req.userId });

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
        const updates = req.body;

        if (!id) {
            return res.status(400).json({ message: "Task ID is required" });
        }

        const task = await Task.findOneAndUpdate(
            { _id: id, userId: req.userId }, 
            updates,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found or unauthorized" });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Failed to update task", error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete({ _id: id, userId: req.userId });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
