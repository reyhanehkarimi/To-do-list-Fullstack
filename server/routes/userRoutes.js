const express = require("express");
const {
    signup,
    loginUser,
    getUsers,
    updateUser,
    deleteUser,
    getUserTasks,
} = require ("../controllers/userController");
const { authenticate } = require("../middleWares/authMiddleware")

const router = express.Router();
router.post("/signup", signup);
router.post("/login", loginUser);
router.get("/", authenticate, getUsers);
router.put("/:id",authenticate, updateUser);
router.delete("/:id",authenticate, deleteUser);
router.get("/:id/tasks",authenticate, getUserTasks);

module.exports = router;