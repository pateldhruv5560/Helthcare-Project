import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Include styles in this file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      navigate('/admin'); // Redirect to the Admin Panel
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
      
        <form>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn" onClick={handleLogin}>
            Login
          </button>
        </form>
   
      </div>
    </div>
  );
};

export default LoginPage;
