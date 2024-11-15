import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Menu from "./menu";
import Data from './story.json';

const App = () => {

  // Reset margin and padding for the body to avoid any unwanted spaces
  useEffect(() => {
    document.body.style.margin = '0'; // Reset body margin
    document.body.style.padding = '0'; // Reset body padding
    document.documentElement.style.height = '100%'; // Ensure the html element takes full height
    document.body.style.height = '100%'; // Ensure body takes full height
  }, []);

  // Check local storage for saved scene ID on initial load, default to "1"
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
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevent any overflow that could create a border
      }}
    >
      <picture>
        <source srcSet={currentScene.image} />
        <img
          src={currentScene.image} // Add the source for the image
          alt="Scene"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </picture>

      {/* Return to Menu Navbar */}
      <div
        className="return-to-menu"
        style={{
          position: 'fixed', // Fixed at the top of the page
          top: 0,            // Ensures it's at the top
          left: 0,
          width: '100%',     // Full width of the screen
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
          height: '5vh',     // Navbar height
          display: 'flex',   // Flex container for alignment
          justifyContent: 'center', // Center the content horizontally
          alignItems: 'center', // Center the content vertically
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none', // Removes underline
            color: 'black',         // Text color
            fontSize: '24px',       // Font size for the text
            fontFamily: 'Helvetica', // Optional: Font family
          }}
        >
          Return to Menu
        </Link>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          position: 'relative',
          width: '70vw',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '25px',
        }}
      >
        <div
          className="story-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            height: '100%',
          }}
        >
          <h2
            style={{
              fontSize: '40px',
              fontFamily: 'Helvetica',
            }}
          >
            {currentScene.Title}
          </h2>
          <h3
            style={{
              fontSize: '30px',
              fontFamily: 'Helvetica',
            }}
          >
            {currentScene["Sub-Title"]}
          </h3>
          <p
            style={{
              flexGrow: '1',
              fontSize: '22px',
            }}
          >
            {currentScene.body}
          </p>

          <div
            className="choices"
            style={{
              display: 'flex',
              gap: '50px',
              width: "100%",
              maxWidth: '750px',
            }}
          >
            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(choice.target)}
                style={{
                  flex: '1',
                  height: '100px',
                  borderRadius: '15px',
                  fontSize: '22px',
                }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
