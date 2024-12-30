import React from 'react';

function TaskFilter({ setFilter }) {
  return (
    <div className="btn-group my-3" role="group">
      <h3 className='fs-4 me-3'>
        Filter Task
      </h3>
      <button className="btn btn-outline-primary rounded-2 me-2" onClick={() => setFilter('all')}>
        All
      </button>
      <button className="btn btn-outline-success rounded-2 me-2" onClick={() => setFilter('completed')}>
        Completed
      </button>
      <button className="btn btn-outline-secondary rounded-2" onClick={() => setFilter('pending')}>
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;

// import { useDispatch } from "react-redux";

// const TaskFilter = ({ setFilter }) => {
//   const dispatch = useDispatch();

//   const handleFilterChange = (newFilter) => {
//     // Dispatch a plain action to update the filter
//     dispatch({ type: "tasks/setFilter", payload: newFilter });
//   };

//   return (
//     <div className="btn-group my-3" role="group">
//       <h3 className="fs-4 me-3">Filter Task</h3>
//       <button
//         className="btn btn-outline-primary rounded-2 me-2"
//         onClick={() => handleFilterChange("all")}
//       >
//         All
//       </button>
//       <button
//         className="btn btn-outline-primary rounded-2 me-2"
//         onClick={() => handleFilterChange("completed")}
//       >
//         Completed
//       </button>
//       <button
//         className="btn btn-outline-primary rounded-2 me-2"
//         onClick={() => handleFilterChange("pending")}
//       >
//         Pending
//       </button>
//     </div>
//   );
// };

// export default TaskFilter;
