
import React, { useState, useEffect } from "react";
import Data from './story.json';



const Story = () => {

  document.body.style.margin = '0'; // Reset body margin
  document.body.style.padding = '0'; // Reset body padding

  // Check local storage for saved scene ID on initial load, default to "2"
  const [currentSceneId, setCurrentSceneId] = useState("1");

  useEffect(() => {
    // Save the current scene ID to local storage on every update
    localStorage.setItem("currentSceneId", currentSceneId);
  }, [currentSceneId]);

  // Access the 'story' array inside 'Data'
  const currentScene = Data.story.find((scene) => scene.ID === currentSceneId);

  const handleOptionClick = (nextId) => {
    setCurrentSceneId(nextId);
  };

  if (!currentScene) {
    return <p>Error</p>;
  }

  return (

    <div style={{ position: 'relative', width: '100vw', height: '100vh' ,display: 'flex', justifyContent:'center',alignItems:'center'}}>
    <picture>
        <source srcSet={currentScene.image}  />
        <source srcSet={currentScene.image}  />
        <img
        style={{
            position: 'absolute',
            top: -1,
            left: -1,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            
            
        }}
        />
    </picture>

    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      position: 'relative',
      width: '70vw',
      height: '60vh',
      display: "flex",
      flexDirection:"column",
      borderRadius: '25px',

  }}>
    <div className="story-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding:'20px',
        height:'100%',
      }}>
      <h2 
      style={{
        fontSize:'40px',
        fontFamily:'Helvetica'
      }}>{currentScene.Title}</h2>
      <h3 
      style={{
        fontSize:'30px',
        fontFamily:'Helvetica'
      }}>{currentScene["Sub-Title"]}</h3> 
      <p 
      style={{
        flexGrow:'1',
        fontSize:'22px'
        }}>{currentScene.body}</p>



      <div className="choices" 
      style={{
        display:'flex',
        gap:'50px',
        width: "100%",
        maxWidth:'750px',
        }}>
        {currentScene.choices.map((choice, index) => (
          <button key={index} onClick={() => handleOptionClick(choice.target)}
          style={{
            flex: '1',
            height:'100px',
            borderRadius:'15px',
            fontSize:'22px',
            
          }}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default Story;