
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Logincomponent/Login';
import CapSignup from './Component/CaptainSignup/CapSignup';
import Admindash from './Component/AdminDashboard/Admindash'
import CustSignup from './Component/CustomerSignup/CustSignup';

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
      <Route path="/Admindash" element={<Admindash />} /> {/* Admin dashbord after admin login*/}
      <Route path="/CapSignup" element={<CapSignup />} /> {/* Captain Signup */}
     
      <Route path="/CustSignup" element={<CustSignup />}/> {/* Customen Signup */}
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App


