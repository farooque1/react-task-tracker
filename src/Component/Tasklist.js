import React from "react";

function TaskList({ tasks, handleEdit, handleDelete }) {

  return (
    <div className="mt-5">
      <table className="table table-bordered table-striped text-center table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className={
                task.status === "completed"
                  ? "table-success"
                  : "table-warning"
              }
            >
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-light me-2"
                  onClick={() => handleEdit(task)}
                >
                  Edit <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn btn-sm btn-dark"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete <i className="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
