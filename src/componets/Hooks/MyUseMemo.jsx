import React, { useMemo, useState } from 'react'

export default function MyUseMemo() {


    const [num,setNum] = useState(0)
    const loop = useMemo(()=>{
        let digit = 0
        for(let i = 0; i < num; i++){
            digit+=i*32
        }
        return digit;

    },[num])
  return (
    <div>
        
        <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} name="" id="" />

        <h2>
            Number : {num} 
            <br />
           
            looping :{loop}
        </h2>
    </div>
  )
}
