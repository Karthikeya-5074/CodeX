import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(display);
        setDisplay(String(result));
      } catch (e) {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];

  return (
    <div className="calculator">
      <input className="calculator-display" type="text" value={display} readOnly />
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
