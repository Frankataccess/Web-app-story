import React from 'react';

const App = () => {
  React.useEffect(() => {
    document.body.style.margin = '0'; // Reset body margin
    document.body.style.padding = '0'; // Reset body padding
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
<picture>
  <source srcSet="/photos/floating harbour.jpg" media="(min-width: 1024px)" />
  <source srcSet="/photos/floating harbour.jpg" media="(min-width: 768px)" />
  <img
    src="/photos/floating harbour.jpg"
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
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'relative',
        width: '60vw',
        height: '60vh',
        display: 'flex', // Enable Flexbox
        justifyContent: 'center', // Horizontally center the box
        alignItems: 'center', // Vertically center the box
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