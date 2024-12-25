import React, { useState } from 'react'
import './themes.css'
export default function UseStateHook() {

    // const [VAR1,VAR2] = useState(initData)
    /* 
        VAR1 => holds current state
        VAR2 => update the current state
        initData => inital data ([],{},"",0,true,"Afsal");
    */
    const [theme,setTheme] = useState('light')

    const [count,setCount] = useState(0);
    const [str,setStr] = useState("")
     
    function minValue(){
        setCount(count-1)
    }
  return (
    <div className={theme} style= {{height:"100vh"}}>

        <button onClick={()=>{
            if(theme==='light'){
                setTheme('dark')

            }
            else {
                setTheme('light')
            }
        }}>
            {
                theme
            }
        </button>
        <button onClick={()=>{ setCount(count+1) }}>Add</button>

        <button onClick={minValue}>Sub</button>

        <br />

        <label htmlFor="">Text</label>
        <input type="text" value={str} onChange={(e)=>{setStr(e.target.value)}} name="" id="" /> 

        <h1>
            Count : {count} <br />
            Text : {str}
        </h1>
    </div>
  )
}
