import React from 'react'

export default function(props) {
  return (
    <div>
        <input type="text" onChange={(e) => props.setCounter(e.target.value)}/>
    </div>
  )
}
