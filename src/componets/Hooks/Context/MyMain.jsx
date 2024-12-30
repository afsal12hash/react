import React, { createContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import MyView1 from './MyView1'
import MyView2 from './MyView2'

export const arrContext1 = createContext()

export default function MyMain() {

    const [textData,setTextData] =useState("")
    const [todos,setTodos] = useState([])
  return (
    <div>
 <input type="text" value={textData} onChange={(e)=>{setTextData(e.target.value)}} name="" id="" />

<button onClick={()=>{
    setTodos([...todos,textData])
}} >Adding</button>

<br />
<Link to={'/list'}>Item-1</Link>
<Link to={'/list1'}>Item-2</Link>

<arrContext1.Provider value={{todos}}>
    <RouterComponent/>
</arrContext1.Provider>

</div>
  )
}
function RouterComponent(){
    return(
        <>
        <Routes>
            <Route path='/list' element={<MyView1/>} />
            <Route path='/list1' element={<MyView2/>} />
        </Routes>
        </>
    )
}