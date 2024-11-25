const express = require("express");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getTasksByDirectory
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);

router.get("/", getTasks);

router.get("/:directoryId/tasks", getTasksByDirectory);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
