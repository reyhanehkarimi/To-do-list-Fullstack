
const mongoose = require("mongoose");

const directorySchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true,
    },
})

module.exports = mongoose.model("directory", directorySchema);







