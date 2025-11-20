import React, { useState } from 'react'

export const CounterButton = () => {
    const [counter,setcounter]=useState(0)
    const handleclick = (e)=> {
        e.preventDefault();
        setcounter(counter+1)
    }
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={handleclick}>increment</button>
    </div>
  )
}
