import React from 'react';
import './Login.css';
import {Container} from '../../components/Containers/Containers';


function Login() {

  function page(){
    return(
        <div className="Main">
            <h1>Login </h1>
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