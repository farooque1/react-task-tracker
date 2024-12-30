import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authslice';

function LoginForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `${username}-${Date.now()}`;
    dispatch(login({ token, username }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h5 className="card-title text-center mb-4">Welcome to Task Trackers</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Write Your Name to Get Started
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your name..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
