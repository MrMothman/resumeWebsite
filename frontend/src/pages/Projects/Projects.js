import React from 'react';
import './Projects.css';
import {Container} from '../../components/Containers/Containers';




function Projects() {

  function page(){
    return(
        <div className="Main">
            <h1>Projects </h1>
        </div>
    )
  }
  return (
    <div className="Projects">
        <Container webpage={page}/>
    </div>
  );
}

export {Projects};


