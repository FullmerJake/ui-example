import React from 'react';
import './App.css';
import MyPlanet from './Components/Planets';

function App() {
  return (
    <div className="App" id="img_wrapper"
    style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
      <MyPlanet />
    </div>
  );
}

export default App;
