const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authmiddeware = require('../middlewares/auth.middleware');

// /task/create
router.post('/create', taskController.createTask)

// /task/accept
router.put('/accept/:taskId', authmiddeware.authUser, taskController.acceptTask)


// /task/complete
router.put('/complete/:taskId', authmiddeware.authUser, taskController.completeTask)


// /task/fail
router.put('/fail/:taskId', authmiddeware.authUser, taskController.failTask)
module.exports = router;

