const taskModel = require('../models/Task.model');
const userModel = require('../models/user.model');

//create task
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

//accept task
module.exports.acceptTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        console.log("taskId:", taskId);

        const task = await taskModel.findById(taskId);
        //check if task exists
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        //check if task is already accepted
        if (task.status === "Active") {
            return res.status(409).json({ message: "Task is already accepted" });
        }

        //update task
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, { status: "Active" }, { new: true });


        //update task count
        const user = await userModel.findByIdAndUpdate(req.user._id, {
            $inc: { "taskCount.Active": 1, "taskCount.NewTask": -1 }
        }, { new: true });

        // check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Task accepted: ", updatedTask);

        res.status(200).json({ message: "Task accepted successfully", updatedTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//complete task
module.exports.completeTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        console.log("taskId:", taskId);

        const task = await taskModel.findById(taskId);

        //check if task exists
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        //check if task is already completed
        if (task.status === "Completed") {
            return res.status(409).json({ message: "Task is already Completed" });
        }
        //update task
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, { status: "Completed" }, { new: true });


        //update task count
        const user = await userModel.findByIdAndUpdate(req.user._id, {
            $inc: { "taskCount.Completed": 1, "taskCount.Active": -1 }
        }, { new: true });

        // check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Task completed: ", updatedTask);

        res.status(200).json({ message: "Task completed successfully", updatedTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//fail task
module.exports.failTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        console.log("taskId:", taskId);

        const task = await taskModel.findById(taskId);

        //check if task exists
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        //check if task is already failed
        if (task.status === "Failed") {
            return res.status(409).json({ message: "Task is already failed" });
        }
        //update task
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, { status: "Failed" }, { new: true });


        //update task count
        const user = await userModel.findByIdAndUpdate(req.user._id, {
            $inc: { "taskCount.Failed": 1, "taskCount.Active": -1 }
        }, { new: true });

        // check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Task failed: ", updatedTask);

        res.status(200).json({ message: "Task failed successfully", updatedTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

