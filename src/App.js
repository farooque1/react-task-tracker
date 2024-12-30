import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks } from './Redux/taskslice';
import LoginForm from './Pages/loginpage';
import Taskmanager from './Component/Taskmanager';

function App() {
  const dispatch = useDispatch();
  const { username, isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadTasks());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <Taskmanager username={username} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
