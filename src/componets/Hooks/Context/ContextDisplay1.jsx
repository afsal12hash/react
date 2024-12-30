import React, { useContext } from 'react';
// import the pattern
import { arrContext } from './MainContext';

export default function ContextDisplay1() {

    //use the pattern using useContext hook
    const data1 = useContext(arrContext)
  return (
    <div>
        <h2>Display 1</h2>

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
