const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Task name is required."],
        trim: true,
        minlength: [3, "Task name must be at least 3 characters long."],
        maxlength: [20, "Task name cannot be more than 20 characters long."],
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["NewTask", "Active", "Completed", "Failed"],
        default: "NewTask",
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Refers to the userSchema
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
