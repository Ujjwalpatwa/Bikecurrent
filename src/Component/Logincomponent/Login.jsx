import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false); 

  useEffect(() => {
    if (loggedIn) {
      if (role === 'ADMIN') {
        navigate('/Admindash');
      } else if (role === 'CUSTOMER') {
        navigate('/customer-dashboard');
      } else if (role === 'CAPTAIN') {
        navigate('/captain-dashboard');
      } else {
        setError('Unknown user role');
      }
    }
  }, [loggedIn]); // Effect runs when loggedIn changes

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        console("token data",data);
        const { token } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        setLoggedIn(true);
        setError('');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Error logging in. Please try again later.');
      console.error('Login error:', error);
    }
  };

  const handleSignupClick = () => {
    // Show signup form when signup button is clicked
    setShowSignup(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLoggedIn(false);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div style={{ margin: 'auto', width: '50%' }}>
        {!loggedIn ? (
          <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '10px' }}>Role:</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="ADMIN">ADMIN</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="CAPTAIN">CAPTAIN</option>
              </select>
            </div>
            <button type="submit" style={{ marginRight: '10px' }}>Login</button>
            <Link to="Signup">
                    <button type="button" onClick={handleSignupClick}>Signup</button> {/* Signup button */}
                </Link>

            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
