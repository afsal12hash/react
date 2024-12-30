import React, { createContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ContextDisplay1 from './ContextDisplay1';
import ContextDisplay2 from './ContextDisplay2';

//it will create a pattern using createContext Method and it will be exported
export const arrContext = createContext();

export default function MainContext() {

    const [textData,setTextData] = useState("");
    const [todos,setTodos] = useState([]);
  return (
    <div>
        <input type="text" value={textData} onChange={(e)=>{setTextData(e.target.value)}} name="" id="" />
        <button

        onClick={()=>{
            setTodos([
                    // can update the array without deleting data (using spread operator methd (...))
                    ...todos,textData
                ])
            }}
        >Add</button>

        <br />

        <Link to={'/home'}>Display 1</Link>
        <Link to={'/d2'}>Display 2</Link>

{/* To Provide value to metiond components */}
        <arrContext.Provider value={{todos}}>
            <RouterComponent />
        </arrContext.Provider>

    </div>
  )
}

//duplicate router file
function RouterComponent(){
    return(
        <>
            <Routes>
                <Route path='/home' element={<ContextDisplay1/>} />
                <Route path='/d2' element={<ContextDisplay2/>} />
                
            </Routes>
        </>
    )
}