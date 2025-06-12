import React, { useState } from 'react';
import './InterestCalculator.css';

function InterestCalculator() {
  const [calcType, setCalcType] = useState('simple');
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState('');

  const validate = (p, r, t) => {
    return !(isNaN(p) || p <= 0 || isNaN(r) || r <= 0 || isNaN(t) || t <= 0);
  };

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    if (!validate(p, r, t)) {
      setError('Enter valid positive numbers.');
      setInterest(null);
      setTotal(null);
      return;
    }

    setError('');
    let i = 0;
    if (calcType === 'simple') {
      i = (p * r * t) / 100;
    } else {
      i = p * Math.pow(1 + r / 100, t) - p;
    }
    setInterest(i);
    setTotal(p + i);
  };

  return (
    <div className="interest-calculator fade-in">
      <h2>Interest Calculator</h2>
      <div className="interest-form">
        <label>
          Type:
          <select value={calcType} onChange={e => setCalcType(e.target.value)}>
            <option value="simple">Simple</option>
            <option value="compound">Compound</option>
          </select>
        </label>
        <label>
          Principal (₹):
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
        </label>
        <label>
          Rate (% per year):
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
        </label>
        <label>
          Time (years):
          <input type="number" value={time} onChange={e => setTime(e.target.value)} />
        </label>
        <button onClick={calculate}>Calculate</button>
        {error && <p className="error">{error}</p>}
      </div>
      {interest !== null && (
        <div className="interest-results fade-in">
          <p>Interest: ₹{interest.toFixed(2)}</p>
          <p>Total Amount: ₹{total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;

