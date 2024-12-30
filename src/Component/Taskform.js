import React from 'react';

function TaskForm({ task, setTask, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">
          Task Title
        </label>
        <input
          type="text"
          id="taskTitle"
          className="form-control"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taskStatus" className="form-label">
          Status
        </label>
        <select
          id="taskStatus"
          className="form-select"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {task.id ? 'Update Task' : 'Save Task'}
      </button>
    </form>
  );
}

export default TaskForm;
