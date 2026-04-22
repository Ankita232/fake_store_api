import React, { useState } from 'react';

export default function () {
    const [output, setOutput] = useState([]);

    const runFizzBuzz = () => {
    const result = [];

    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('Fizz Buzz');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else {
        result.push(i);
      }
    }

    setOutput(result);
}

  return (
    <div>
      <h2>Fizz Buzz (1 to 100)</h2>
      <button onClick={runFizzBuzz}>Run</button>

<ul>
        {output.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
 

    </div>
  )
}
