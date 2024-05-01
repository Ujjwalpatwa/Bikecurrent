import React, { useState } from 'react';
import './Signup.css'; // Import CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userAadhaarNumber: '',
    userMobileNumber: '',
    userEmail: '',
    userPassword: '',
    driverLicense: '',
    userRole:'',
    bike: {
      bikeName: '',
      bikeColor: '',
      bikeModel: '',
      bikePlateNumber: ''
    }
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the changed field is part of the bike details, update the nested state
    if (name.startsWith('bike.')) {
      const bikeField = name.split('.')[1]; // Extract the bike field name (e.g., bikeName, bikeColor, etc.)
      setFormData({
        ...formData,
        bike: {
          ...formData.bike,
          [bikeField]: value
        }
      });
    } else {
      // Otherwise, update the top-level state
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/captain/post', {
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
          userRole:'',
          bike: {
            bikeName: '',
            bikeColor: '',
            bikeModel: '',
            bikePlateNumber: ''
          }
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
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Aadhaar ID:</label>
          <input
            type="text"
            name="userAadhaarNumber"
            value={formData.userAadhaarNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="userMobileNumber"
            value={formData.userMobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>License:</label>
          <input
            type="text"
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bike Name:</label>
          <input
            type="text"
            name="bike.bikeName"
            value={formData.bike.bikeName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bike Color:</label>
          <input
            type="text"
            name="bike.bikeColor"
            value={formData.bike.bikeColor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bike Model:</label>
          <input
            type="text"
            name="bike.bikeModel"
            value={formData.bike.bikeModel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bike Plate Number:</label>
          <input
            type="text"
            name="bike.bikePlateNumber"
            value={formData.bike.bikePlateNumber}
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
