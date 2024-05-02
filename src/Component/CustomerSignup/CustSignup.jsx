import React, { useState } from 'react';
import './CustSignup.css'; // Import CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userAadhaarNumber: '',
    userMobileNumber: '',
    userEmail: '',
    userPassword: '',
    driverLicense: '',
    userRole: 'CUSTOMER',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/customer/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setError('');
        // Reset form fields on successful signup
        setFormData({
          userName: '',
          userAadhaarNumber: '',
          userMobileNumber: '',
          userEmail: '',
          userPassword: '',
          driverLicense: '',
          userRole: 'CUSTOMER',
        });
        console.log('Signup successful');
      } else {
        const data = await response.json();
        setError(data.message || 'Signup failed. Please try again later.');
      }
    } catch (error) {
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Aadhaar ID:</label>
          <input
            type="text"
            name="userAadhaarNumber"
            value={formData.userAadhaarNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="text"
            name="userMobileNumber"
            value={formData.userMobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>License:</label>
          <input
            type="text"
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
