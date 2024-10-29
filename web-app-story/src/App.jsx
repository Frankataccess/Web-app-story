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
        /*a */
        <source srcSet="/photos/floating harbour.jpg" media="(min-width: 1024px)" />
        <source srcSet="/photos/floating harbour.jpg" media="(min-width: 768px)" />
        <img
        src="/photos/floating harbour.jpg"
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

  }}>
    <div className="story-container">
      <h2>{currentScene.Title}</h2>
      <h3>{currentScene["Sub-Title"]}</h3> {/* Use bracket notation for keys with hyphens */}
      <p>{currentScene.body}</p>

      {currentScene.image && (
        <img src={currentScene.image} alt={`${currentScene.Title} scene`} />
      )}

      <div className="choices">
        {currentScene.choices.map((choice, index) => (
          <button key={index} onClick={() => handleOptionClick(choice.target)}>
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