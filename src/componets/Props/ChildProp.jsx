import React from 'react'

// export default function ChildProp(re) {
//   console.log(re);
//   console.log(re.REModels);

//   return (
//     <div>
//         <h2>Child</h2>
//     </div>
//   )
// }
export default function ChildProp({ REModels }) {
  console.log(REModels);

  return (
    <div>
      <h2>Child</h2>
      <ol>
        {
          REModels.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ol>
    </div>
  )
}
