import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    const [time,setTime] = useState(`${new Date()}`);

    setInterval(()=>{
        setTime(`${new Date()}`)
    },[1000]);

    // useEffect(()=>{
    // },[dependency]);

    useEffect(()=>{
        document.getElementById('disp').style.background = "#"+Math.random().toString(16).slice(-6)
    },[time]);


  return (
    <div id='disp' style={{height:"100vh"}}>
        <h1>
            {
                time
            }
        </h1>
    </div>
  )
}
