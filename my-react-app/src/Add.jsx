import React from 'react'

export default function Add(props) {
    var x= Number(props.num1)
    var y= Number(props.num2)
  return (
    <div>
        Addition of number is {x+y}
        </div>
  )
}
