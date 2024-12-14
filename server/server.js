const express = require("express");
const cors = require("cors");
const directoryRoutes = require("./routes/directoryRoute");
const taskRoutes = require("./routes/taskRoute");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./db/connectDB"); 
require("dotenv").config(); 

const app = express();

app.use(express.json());  
app.use(cors());         

app.use("/api/directories", directoryRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).json({ error: "Something went wrong! Please try again later." });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDb();
    console.log("Connected to the database successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); 
  }
}

startServer(); 
