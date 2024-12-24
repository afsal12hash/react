import React from 'react'

import MyChild from './Mychild';

export default function MyParent() {

  const webDeveloperTools = [

    "MongoDB",
    "Express.js",
    "Django",
    "Ruby on Rails",
    "Laravel",
    "GraphQL",
    "TypeScript",
    "Jest",
    "Mocha",
    "ESLint",
    "Prettier"
  ];
  return (
    <div>


      <h3>MyPareny</h3>

      <ol>
        {
          webDeveloperTools.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            )
          })
        }
      </ol>

   <MyChild mod={webDeveloperTools}/>
    </div>
  )
}
