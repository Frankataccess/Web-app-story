import React from 'react';

const App = () => {
  React.useEffect(() => {
    document.body.style.margin = '0'; // Reset body margin
    document.body.style.padding = '0'; // Reset body padding
  }, []);



  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' ,display: 'flex', justifyContent:'center',alignItems:'center'}}>
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
        width: '70vw',
        height: '60vh',
        display: "flex",
        flexDirection:"column",

      }}>
          <h1 className="text-2xl font-bold text-center" align="center" >Central Bristol</h1>
          <h2 align='center'>
            Night out in Bristol: 
          <span style={{ 
            color: 'red', 
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' 
          }}>
            Make it home to Lockleaze
          </span>
        </h2>
        <p style={{ textAlign: 'center', fontSize: '20px', paddingTop: '50px',paddingLeft: '20px', paddingRight: '20px', flexGrow:"1" }}>
          After a night out you find yourself alone in central Bristol and you need to make it home
        </p>

        <div className="flex justify-between absolute" style={{
          
        }} >
          <button>
            Option 1
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Button 2</button>
        </div>

      </div>
    </div>
  );
};

export default App;