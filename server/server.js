/*eslint-disable*/

const express = require("express");
const cors = require("cors");
const directoryRoutes = require("./routes/directoryRoute");
const taskRoutes = require("./routes/taskRoute");
const connectDb = require("./db/connectDB");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/directories", directoryRoutes);
app.use("/api/tasks", taskRoutes);

// Database Connection and Server Start
const PORT = process.env.PORT || 5000;
connectDb();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
