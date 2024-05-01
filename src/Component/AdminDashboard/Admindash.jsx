// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Admindash.css';

const Admindash = () => {
  return (
    <>
    <body>
      
    
      <div className="bg-image h-screen">
            <header className="header p-4">
                <nav className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="nav-link text-lg font-semibold mr-4">Admin</Link>
                    </div>
                    <div className="flex items-center">
                        <Link to="/captain" className="nav-link mr-4">Captain</Link>
                        <Link to="/customer" className="nav-link mr-4">Customer</Link>
                        <Link to="/bike" className="nav-link mr-4">Bike</Link>
                        <Link to="/ride" className="nav-link mr-4">Ride</Link>
                        <Link to="/booking" className="nav-link mr-4">Booking</Link>
                        <Link to="/feedback" className="nav-link mr-4">Feedback</Link>
                    </div>
                    {/* Add any additional elements like profile/avatar, logout button, etc. */}
                </nav>
            </header>
        </div>
        </body>
    </>
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div>
    //     <h2>Dashboard</h2>
    //     <p>Welcome to your dashboard!</p>
    //     <p>This is just a placeholder content. You can customize it as per your requirements.</p>
    //   </div>
    // </div>
  );
};

export default Admindash;

