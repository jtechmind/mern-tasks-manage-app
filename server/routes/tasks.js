const express = require("express");
const {
  welcome,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasksController");
const router = express.Router();

// Route to home page
router.get("/", welcome);

// Route to get all tasks
router.get("/tasks", getAllTasks);

// Route to get single tasks
router.get("/:id", getTask);

// Route to create a new task
router.post("/", createTask);

// Route to update a task by ID
router.put("/:id", updateTask);

// Route to delete a task by ID
router.delete("/:id", deleteTask);

module.exports = router;
