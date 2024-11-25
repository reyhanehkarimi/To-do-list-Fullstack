const mongoose = require("mongoose");
const Directory = require("./directory");

const taskSchema = new mongoose.Schema({
   title: { type: String, require: true },
   description: {type: String },
   completed: { type: Boolean, default: false },
   important: { type: Boolean, default: false },
   deadline: { type: Date },
   dirId : { type: mongoose.Schema.Types.ObjectId, ref: "Directory", require: true }
});

module.exports = mongoose.model("Task", taskSchema)