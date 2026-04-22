import React, { useState } from 'react'

export default function GetSquare() {
    const [num , setNumber] = useState(1);
    const [sqr , setSqr] = useState(1);
    const calculate =()=>{
        setSqr(num*num)
    }
    

  return (
    <div>
        {/* {num} */}
        Current Value : {num}<br/>
        <label>Number</label>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} autoFocus/>
        <button onClick={calculate}>Get Square</button>
        {/* {sqr} */}
<h4>Square of {num} is : {sqr}</h4>
    </div>
  )
}
