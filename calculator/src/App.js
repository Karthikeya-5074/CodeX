import React from 'react';
import './App.css';
import Calculator from './Calculator';
import InterestCalculator from './InterestCalculator';

function App() {
  return (
    <div className="App fade-in">
      <h1>React Calculator</h1>
      <section className="section">
        <h2>Basic Calculator</h2>
        <Calculator />
      </section>
      <section className="section">
        <InterestCalculator />
      </section>
    </div>
  );
}

export default App;
