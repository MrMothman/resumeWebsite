import React from 'react';
import './Register.css';
import {Container} from '../../components/Containers/Containers';
import { useState } from 'react';
import axios from 'axios';


function Register() {

  const handleFormRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object containing login data
    const loginData = {
      username: username,
      password: password,
    };

    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('/api/register', loginData);
      console.log('Registration successful:', response.data);
      
      // Optionally, perform any necessary actions upon successful login
    } catch (error) {
      // Handle error
      console.error('Registration failed:', error.response.data.error);
      
      // Optionally, display error message to the user
    }
  };

  function page(){
    return(
        <div className="MainLogin">

          <div className = "LoginSection">
            <div className="LoginForm">
              <div className="foramtLogin">
            <h2>Register </h2>
            <br /> 
            {/* Form Registration begins here */}
            <form onSubmit={handleFormRegister}>
              <div className= "inputBox">
                <input type="text" id="username" name="username" />
                <label>Username</label>
              </div>
                <br />
              <div className= "inputBox">
                <input type="password" id="password" name="password" />
                <label>Password</label>
              </div>
                <br />
                <button type="submit" className="subBut">Register</button>
            </form>
            </div>
            </div>
            </div>

          <div className = "LoginSection">
            </div>
        </div>
    )
  }
  return (
    <div className="Login">
        <Container webpage={page}/>
    </div>
  );
}

export {Register};