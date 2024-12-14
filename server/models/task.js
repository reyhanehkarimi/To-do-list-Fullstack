const mongoose = require("mongoose");
const Directory = require("./directory");
const Task = require("./directory");

const taskSchema = new mongoose.Schema({
   title: { 
      type: String, 
      require: true 
   },
   description: {
      type: String,
      required : true,
   },
   dueDate:{
      type: Date,
   },
   completed: {
       type: Boolean, 
       default: false 
      },

   important: {
       type: Boolean, 
       default: false 
      },
   deadline: { 
      type: Date 
   },
   dirId : {
       type: mongoose.Schema.Types.ObjectId, 
       ref: "Directory",
        require: true 
      },
   userId: { type: mongoose.Schema.Types.ObjectId,
       ref: "User",
        required: true 
      },
   },
   {
      timestamp: true,
   }
);

module.exports = mongoose.model("Task", taskSchema)
module.exports = Task;





