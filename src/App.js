import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return ( 
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 003</h2>
      <p>WVU ID: 800380069</p>
      <p>Hi, I am Kyle Shumaker</p>
      <Card />
  </div> 
  );
}

export default App;