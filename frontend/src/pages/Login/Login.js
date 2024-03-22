import React from 'react';
import './Login.css';
import {Container} from '../../components/Containers/Containers';


function Login() {

  function page(){
    return(
        <div className="MainLogin">
          <div className = "LoginSection">
            <div className="LoginForm">
            <h1>Login </h1>
                <br>
                </br>
            <form>
                <input type="text" id="username" name="username" placeholder="Username" />
                <br>
                </br>
                <input type="password" id="password" name="password" placeholder="Password" />
                <br>
                </br>
                <button type="submit">Login</button>
            </form>
            </div>
            </div>

            <div className = "Explanation">

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


export {Login}; 