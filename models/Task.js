const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Provide a Valid Name"],
        trim: true,
        maxlength: [20, "name length cannot be more than 20 character"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model('Project-1', taskSchema);