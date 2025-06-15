const taskModel = require('../models/Task.model');
const userModel = require('../models/user.model');
module.exports.createTask = async (req, res) => {
    try {
        const { title, description, date, category, assignedTo } = req.body;

        // Create task
        const task = await taskModel.create({
            title,
            description,
            date,
            category,
            assignedTo,
        });
        console.log("Task Created: ", task);

        await userModel.findByIdAndUpdate(assignedTo, {
            $push: { tasks: task._id },
            $inc: { "taskCount.NewTask": 1 }
        })

        res.status(201).json({ message: "Task created successfully", task });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}