
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Logincomponent/Login';
import Signup from './Component/SignupComponent/Signup';
import Admindash from './Component/AdminDashboard/Admindash'

//import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// import Dashboard from './Component/Dashbord1';
// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Login/>,
//       children: [
//         {
//           path: "",
//           element: <Signup />
//         }
//       ]
//     }
//   ])



function App() {
  
  
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> {/* Define route for Login component */}
      <Route path="/Admindash" element={<Admindash />} /> 
      <Route path="/signup" element={<Signup />} /> {/* Define route for Signup component */}
      {/* Add more routes as needed */}
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App


