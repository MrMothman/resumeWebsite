import React from 'react';
import './Contact.css';
import {Container} from '../../components/Containers/Containers';


function Contact() {
    
      function page(){
     return(
          <div className="Main">
                <h1>Contact </h1>
          </div>
     )
      }
      return (
     <div className="Contact">
          <Container webpage={page}/>
     </div>
      );
    }
    export {Contact};