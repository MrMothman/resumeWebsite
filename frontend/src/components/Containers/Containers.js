import React, {useState} from "react";
import "./Containers.css";

function Container({webpage: Webpage}){
  const [isHovered, setIsHovered] = useState(false);

    const navBarNames = ["Home", "Login", "Projects", "Art", "Skills", "Contact" ];
  //---------------------------------

  const handleMouseEnter = (id) => {
    setIsHovered(true);

    const flexContainer = document.getElementById(id);
    const flexItems = flexContainer.querySelectorAll('.Letterbox');

    flexItems.forEach((item) => {
      item.className= "LetterboxHovered";
    });
  }

  const handleMouseLeave = (id) => {
    setIsHovered(false);

    const flexContainer = document.getElementById(id);
    const flexItems = flexContainer.querySelectorAll('.LetterboxHovered');

    flexItems.forEach((item) => {
      item.className= "Letterbox";
  
    })
  }

  //---------------------------------


    return(
        <>
        <div className="Sidebar"> 
          {
            navBarNames.map((name, index) => (
              <Wordbox key={index} sName={name} index={index} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
          ))}
        </div>

        <div className="Mainarea"> 
          <Webpage/>
        </div>
        </>
    );
}


function Wordbox({sName, index, handleMouseEnter, handleMouseLeave}){
  const characters = sName.split('');
  return(
    <>
    <div className="Title"> 
    <div id={index} className="Wordbox"
      onMouseEnter={()=> handleMouseEnter(index) }
      onMouseLeave={() => handleMouseLeave(index)}
    > 
    {
      characters.map((char, charIndex) => (
      <div key={charIndex} className="Letterbox">
        <h1>{char}</h1>
      </div>
    ))}
      </div>
      </div>
    </>
  );

}

export {Container};
