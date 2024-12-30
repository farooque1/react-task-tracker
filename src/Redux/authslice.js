import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('authToken') || null,
    username: localStorage.getItem('username') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
  },
  reducers: {
    login(state, action) {
      const { token, username } = action.payload;
      state.token = token;
      state.username = username;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', username);
    },
    logout(state) {
      state.token = null;
      state.username = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      localStorage.removeItem('tasks');

    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
