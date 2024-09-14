import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // password and email
  const correctEmail = "priya321@gmail.com";
  const correctPassword = "987654321";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      
      localStorage.setItem('token', 'dummy-jwt-token');
      navigate('/Admin-dashboard'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-box">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
