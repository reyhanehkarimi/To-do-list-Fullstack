
const express = require("express");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getTasksByDirectory

} = require("../controllers/taskController");
const { getUserTasks } = require("../controllers/userController");
const { authenticate } = require("../middleWares/authMiddleware");


const router = express.Router();

router.post("/",authenticate, createTask);

router.get("/",authenticate, getTasks);

router.get("/:directoryId/tasks",authenticate, getTasksByDirectory);

router.put("/:id",authenticate, updateTask);

router.delete("/:id",authenticate, deleteTask);

router.get("/user/:userId",authenticate, getUserTasks)

module.exports = router;
