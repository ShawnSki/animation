import React from 'react';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className='bodyOver'>
      <Nav />
      <div className='heroContainer'>
        <h2>Welcome To Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button>TELL ME MORE</button>
      </div>
    </div>
  );
}

export default App;
