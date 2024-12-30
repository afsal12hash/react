import React, { useContext } from 'react'
import { arrContext1 } from './MyMain'

export default function MyView1() {


    const data1 = useContext(arrContext1)
  return (
    <div>
        <h2>View 1</h2>
    

         <ol>
            {
              
              data1.todos.map((item,index)=>{
                return(
                    <li key={index}>{item}</li>
                )
              })
            }
        </ol>
    </div>
  )
}
