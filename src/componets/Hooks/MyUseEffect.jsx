import React, { useEffect, useState } from 'react'

export default function MyUseEffect() {
  const [time,setTime] = useState (`${new Date()}`);
  setInterval (()=>{
    setTime(`${new Date()}`)
},[100])

useEffect(()=>{
  document.getElementById('have').style.backgroundColor = 'red' 
},[time]);
  return (
    <div id='have' style={{height:"1000vh"}}>
      <h1>
        {
          time
        }
      </h1>

    </div>
  )
}
