import React, { useState } from 'react'
import './Theme.css'
export default function MyuseState() {

    const [theme,setTheme] = useState('light')
    const [count, setCount] = useState(0)
    const [str, setStr] = useState("")
    function minValue() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className={theme} style={{height:"100vh"}}>

            <button onClick={()=>{
                if(theme==='light'){
                    setTheme('dark')
                }
                else{
                    setTheme('light')
                }
            }}>
                {
                    theme
                }
            </button>

            <button onClick={() => { setCount(count + 1) }}>Counting</button>
            <button onClick={minValue}>Uncount</button>
            <br />
            <label htmlFor="">Fill The  Blank</label>
            <input type="text" value={str} onChange={(e) => { setStr(e.target.value) }} name="" id="" />


            <h1>Count : {count} <br />
                text : {str}
            </h1>
        </div>

    )
}
