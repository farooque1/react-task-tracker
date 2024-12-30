import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks, saveTask, removeTask, setFilter } from '../Redux/taskslice';
import TaskForm from './Taskform';
import TaskList from './Tasklist';
import TaskFilter from './Taskfilter';
import Pagination from './Share/Pagination';
import '../App.css';
import { logout } from '../Redux/authslice';

function Taskmanager({username}) {

  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [task, setTask] = useState({ title: '', status: 'pending' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all"); 
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(7);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
});

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    dispatch(saveTask(task));
    setTask({ title: '', status: 'pending' });
    setIsModalOpen(false);
  };

  const handleEdit = (taskToEdit) => {
    setTask(taskToEdit);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleLogout = () => {
    dispatch(logout()); 
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-4">Welcome, {username} To React Task Tracker</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        <div className="d-flex justify-content-between align-items-center">
         <div className='d-flex'>
         <button
            className="btn btn-outline-primary d-flex align-items-center me-3"
            onClick={() => {
              setTask({ title: '', status: 'pending' });
              setIsModalOpen(true);
            }}
          >
            <i className="bi bi-plus-circle fs-5"></i>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={handleLogout} 
          >
          Logout <i class="bi bi-power"></i>
          </button>
         </div>

          <TaskFilter setFilter={setFilter} />
        </div>

        <TaskList
          tasks={currentTasks}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        <Pagination
          currentPage={currentPage}
          totalItems={filteredTasks.length}
          itemsPerPage={tasksPerPage}
          paginate={paginate}
        />

        {isModalOpen && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            tabIndex="-1"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{task.id ? 'Edit Task' : 'Add New Task'}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setIsModalOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <TaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Taskmanager;
