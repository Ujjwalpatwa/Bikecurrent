import React, { useState } from 'react';
import { loginUser } from '../../services/user-service';
import { toast } from 'react-toastify';
import { doLogin } from '../../auth';
//import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [loginDetail,setloginDetail]=useState({
    email:'',
    password:'',
    role:''
  })

  const handleChange=(event,field)=>{
    let actualValue=event.target.value
    setloginDetail({
      ...loginDetail,
      [field]:actualValue
    })
  };
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    console.log(loginDetail);
    if(loginDetail.email.trim=='' || loginDetail.password.trim==''){
      renderToStaticMarkup.error("Username or password  is required !!")
      return;
    }
    // submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{
      //console.log("User login:")
      console.log(data)


      //save the data to local storage
      doLogin(data,()=>{
        console.log("Login detail is saved to localstorage")
        //redirect to  usr dashboard page

      })
      toast.success("Login success")

    }).catch(error=>{
      console.log(error)
      if(error.response == 400 || error.response == 404){
        toast.error(error.response.data.message)
      }
      else{
        toast.error("Something went wrong on server!!")
      }
      
    })
      

  };

  
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleFormSubmit} style={{ textAlign: 'center' }}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={loginDetail.email}
            onChange={(e) => handleChange(e,'email')}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={loginDetail.password}
            onChange={(e) => handleChange(e,'password')}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={loginDetail.role}
            onChange={(e) => handleChange(e,'role')}
            required
          >
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="CAPTAIN">CAPTAIN</option>
          </select>
        </div>
        <button type="submit">Login</button>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      </form>
    </div>
  );
};

export default Login;
