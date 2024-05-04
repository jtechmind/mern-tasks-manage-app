import React, { useState, useEffect } from "react";

const TaskForm = ({ onSave, onCancel, initialTask }) => {
  const [task, setTask] = useState(
    initialTask || {
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium", // Default priority
      assignedTo: "",
    }
  );

  useEffect(() => {
    if (initialTask) {
      setTask(initialTask);
    }
  }, [initialTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Assigned To:</label>
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
