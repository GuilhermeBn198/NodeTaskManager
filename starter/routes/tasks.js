const express = require('express')
const router = express.Router()

//controllers
const {
	getAllTasks, 
	createTask,
} = require('../controllers/taskscontroller')

//routes
router.route('/').get(getAllTasks)

module.exports = router