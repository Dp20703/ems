const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

router.post('/create', taskController.createTask)
module.exports = router;
