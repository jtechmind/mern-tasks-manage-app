const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  category: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Todo", "In Progress", "Done"],
    default: "Todo",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// module.exports = mongoose.model("Task", taskSchema);
//const Task = mongoose.model.tasks || mongoose.model("tasks", taskSchema);
// module.exports = Task;
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
