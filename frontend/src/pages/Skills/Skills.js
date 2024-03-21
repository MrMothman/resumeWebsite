import React from 'react';
import './Skills.css';
import {Container} from '../../components/Containers/Containers';

function Skills() {
  function page(){
    return(
        <div className="Main">
            <h1>Skills </h1>
        </div>
    )
  }
  return (
    <div className="Skills">
        <Container webpage={page}/>
    </div>
  );
}

export {Skills};