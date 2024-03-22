import React from 'react';
import './Home.css';
import {Container} from '../../components/Containers/Containers';


function Home() {

  function page(){
    return(
      <div className="Main">
     
        </div>
    )
  }

  return (

    <div className="Home">
        <Container webpage={page}/>
    </div>

  );
}






export {Home};