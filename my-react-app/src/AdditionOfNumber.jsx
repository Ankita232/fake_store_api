import React, { useState } from 'react'

export default function AdditionOfNumber() {
    const [num1, setNumber1]= useState(0);
    const [num2,setNumber2]=useState(0);
    const [sum,setOutput]=useState(0);

    const result =()=>{
        setOutput(Number(num1)+Number(num2))

    }

  return (
    <div><label>Enter First Number:</label>
        <input type="number" onChange={(e)=>setNumber1(e.target.value)}/><br/>
    <label>Enter Second Number :</label>
        <input type="number" onChange={(e)=>setNumber2(e.target.value)}/><br/>
        <button onClick={result}>Get Sum</button>
        <p>Addition of {num1} And {num2} is {sum}</p>
    </div>
  )
}
