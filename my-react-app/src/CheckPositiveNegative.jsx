import React, { useState } from 'react';

export default function CheckPositiveNegative
    () {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const checkNumber = () => {
        const num = Number(number);
        if (num > 0) {
            setResult('Positive Number');
        } else if (num < 0) {
            setResult('Negative Number');
        } else if (num === 0) {
            setResult('Zero');
        } else {
            setResult('Please enter a valid number');
        }
    };
    return (
        <div>
            <h2>Check Number</h2>

      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={checkNumber} style={{ marginLeft: '10px' }}>
        Check
      </button>

      <p>{result}</p>
        </div>
    )
}
