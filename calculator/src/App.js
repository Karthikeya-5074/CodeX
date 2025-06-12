import React from 'react';
import './App.css';
import Calculator from './Calculator';
import InterestCalculator from './InterestCalculator';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
      <InterestCalculator />
    </div>
  );
}

export default App;
