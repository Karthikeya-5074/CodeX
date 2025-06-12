import React, { useState } from 'react';
import './InterestCalculator.css';

function InterestCalculator() {
  const [calcType, setCalcType] = useState('simple');
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);
  const [total, setTotal] = useState(null);
  const [emi, setEmi] = useState(null);
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
      setEmi(null);
      return;
    }

    setError('');
    setEmi(null);
    let i = 0;

    if (calcType === 'simple') {
      i = (p * r * t) / 100;
      setInterest(i);
      setTotal(p + i);
    } else if (calcType === 'compound') {
      i = p * Math.pow(1 + r / 100, t) - p;
      setInterest(i);
      setTotal(p + i);
    } else {
      // EMI calculations for home, car and personal loans
      const monthlyRate = r / (12 * 100);
      const n = t * 12;
      const emiVal = p * monthlyRate * Math.pow(1 + monthlyRate, n) /
        (Math.pow(1 + monthlyRate, n) - 1);
      const totalPayment = emiVal * n;
      setEmi(emiVal);
      setInterest(totalPayment - p);
      setTotal(totalPayment);
    }
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
            <option value="home">Home Loan EMI</option>
            <option value="car">Car Loan EMI</option>
            <option value="personal">Personal Loan EMI</option>
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
      {(interest !== null || emi !== null) && (
        <div className="interest-results fade-in">
          {emi !== null && <p>Monthly EMI: ₹{emi.toFixed(2)}</p>}
          <p>
            {calcType === 'simple' || calcType === 'compound'
              ? 'Interest'
              : 'Total Interest'}:
            ₹{interest.toFixed(2)}
          </p>
          <p>
            {calcType === 'simple' || calcType === 'compound'
              ? 'Total Amount'
              : 'Total Payment'}:
            ₹{total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;

