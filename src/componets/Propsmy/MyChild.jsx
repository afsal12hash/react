import React from 'react'

export default function Mychild({ mod }) {
  console.log(mod);

  return (
    <div>

      <h3>Mychild</h3>
      <ol>
        {
          mod.map((item, index)=>( 
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ol>
    </div>
  )
}
