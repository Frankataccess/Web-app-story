import React from 'react';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('../photos/Bristol_City_Centre_at_night_(3120341579).jpg')` }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Hello, World!</h1>
        <p className="text-center">This is a semi-transparent white box.</p>
      </div>
    </div>
  );
};

export default App;