const express = require("express");

const {
    createDirectory,
    getDirectories, 
    updateDirectory,
    deleteDirectory,
} = require("../controllers/directoryController");

const router = express.Router();

router.post("/", createDirectory);
router.get("/", getDirectories); 
router.put("/:id", updateDirectory);
router.delete("/:id", deleteDirectory);

module.exports = router;
