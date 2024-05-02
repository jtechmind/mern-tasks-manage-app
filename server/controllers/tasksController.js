const Task = require("../models/taskModel");

const welcome = async (req, res) => {
  try {
    res.send("Welcome to the application.");
  } catch (error) {}
};

// Create a new task

const createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      category: req.body.category,
      status: req.body.status,
    });
    console.log(task);
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message111: error.message });
  }
};

// Get task by id

const getTask = async (req, res) => {
  try {
    const task_id = req.params.id;
    const task = await Task.findById(task_id);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All tasks

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a task by id

const deleteTask = async (req, res) => {
  try {
    const task_id = req.params.id;
    const task = await Task.findByIdAndDelete(task_id);
    res.status(200).json(task);
  } catch (error) {}
};

// Edit a task

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(task);
  } catch (error) {}
};

module.exports = {
  welcome,
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
