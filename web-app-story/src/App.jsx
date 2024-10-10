import React from 'react';

const App = () => {
  // Apply styles directly to the body using JavaScript
  React.useEffect(() => {
    document.body.style.margin = '0'; // Reset body margin
    document.body.style.padding = '0'; // Reset body padding
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <img
        src="/public/photos/bris center.jpg"
        alt="Bristol City Centre at Night" // Always add alt text for accessibility
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the entire area
        }}
      />
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'relative',
        zIndex: 1, // Ensures this content is on top of the image
        padding: '2.5rem', // Add padding to the box
      }}>
        <h1 className="text-2xl font-bold text-center">Hello, World!</h1>
        <p className="text-center">
          This is a semi-transparent white box. Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
    </div>
  );
};

export default App;