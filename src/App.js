import React, { useState } from 'react';
import './App.css';
import gear from './gear.jpg';
import Untitled from './Untitled.png';
import testt from './testt.png';
import threedots from './threedots.png';
import copas from './copas.png';
function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="panel-container">
      <div className="purple-layer">
        <h1 className="text">partie with Me</h1>
        <div className="bottom-layer">
          <div className='pwv'>
            <p>Partie with Viewers + Chat Bot</p>
          </div>
          <div className='cop'>
            <img src={copas} alt="logo" className='logo-image' />
          </div>
          <div className='tdots'>
            <img src={threedots} alt="logo" className='logo-im' />
          </div>
        </div>
        <div className="submessage">
          <p>
            <span className="white-text">Type </span>
            <span className="green-text">!partie</span>
            <span className="white-text"> in chat to join the Queue</span>
          </p>
        </div>
        <div className="logo">
          <img src={testt} alt ="logo" className="logo-image" />
        </div>
        <div className="setting">
          <img src={gear} alt="gear" className="gear-image" />
        </div>
        <div className="tooltip-container">
          <div
            className={`tooltip-icon ${showTooltip ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle">
              <span className="icon">i</span>
            </div>
            <span className={`tooltip ${showTooltip ? 'visible' : ''}`}>
              This is a tooltip
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


