import React, { useState } from 'react';
import './InterestCalculator.css';

function InterestCalculator() {
  const [loanType, setLoanType] = useState('home');
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const annualRate = parseFloat(rate) / 100;
    const n = parseFloat(term) * 12; // months
    const r = annualRate / 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || r === 0) {
      setEmi(null);
      setTotalInterest(null);
      return;
    }
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue);
    setTotalInterest(emiValue * n - p);
  };

  return (
    <div className="interest-calculator">
      <h2>Interest Calculator</h2>
      <div className="interest-form">
        <label>
          Loan Type:
          <select value={loanType} onChange={e => setLoanType(e.target.value)}>
            <option value="home">Home Loan</option>
            <option value="car">Car Loan</option>
            <option value="personal">Personal Loan</option>
          </select>
        </label>
        <label>
          Principal (₹):
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} />
        </label>
        <label>
          Annual Interest Rate (%):
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
        </label>
        <label>
          Term (years):
          <input type="number" value={term} onChange={e => setTerm(e.target.value)} />
        </label>
        <button onClick={calculateEmi}>Calculate</button>
      </div>
      {emi !== null && (
        <div className="interest-results">
          <p>Monthly EMI: ₹{emi.toFixed(2)}</p>
          <p>Total Interest: ₹{totalInterest.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;
