import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const beep = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 400;
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // no audio support
    }
  };

  const handleClick = (value) => {
    beep();
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
