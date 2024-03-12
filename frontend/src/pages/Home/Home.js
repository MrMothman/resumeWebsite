import React from 'react';
import './Home.css';
import {Container} from '../../components/Containers/Containers';


function Home() {

  function test(){
    return(
      <div className="Main">
        <div className="circle-container">
          <div className="circle">
            <h1>Hire </h1>
            <br/>
            <h1>Me</h1>

          </div>
        </div>
        </div>
    )
  }


  return (

    <div className="Home">
        <Container webpage={test}/>
    </div>

  );
}






export {Home};