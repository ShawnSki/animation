import React from 'react';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className='bodyOver'>
      <Nav />
      <div className='heroContainer'>
        <h2>Welcome To Our Studio!</h2>
        <div className='boxText'>
          <h1>IT'S NICE TO MEET YOUR</h1>
          <div className='boxTextAnimate'>
            <span>PACK</span>
            <span>TEAM</span>
            <span>FAMILY</span>
            <span>GANG</span>
          </div>
        </div>
      </div>
      <div>
        <button>TELL ME MORE</button>
      </div>
    </div>
  );
}


export default App;
