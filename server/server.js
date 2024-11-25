/*eslint-disable*/

const express = require("express");
const cors = require("cors");
const directoryRoutes = require("./routes/directoryRoute");
const taskRoutes = require("./routes/taskRoute");
const connectDb = require("./db/connectDB");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/directories", directoryRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
connectDb();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
