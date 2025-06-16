const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authmiddeware = require('../middlewares/auth.middleware');

// /task/create
router.post('/create', taskController.createTask)

// /task/accept
router.put('/accept/:taskId', authmiddeware.authUser, taskController.acceptTask)
module.exports = router;

// /task/complete
router.put('/complete/:taskId', authmiddeware.authUser, taskController.completeTask)
module.exports = router;

// /task/fail
router.put('/fail/:taskId', authmiddeware.authUser, taskController.failTask)
module.exports = router;

