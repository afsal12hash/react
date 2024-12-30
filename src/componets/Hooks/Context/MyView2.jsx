import React, { useContext } from "react";
import { arrContext1 } from "./MyMain";

export default function MyView2() {

    const data2 =useContext(arrContext1)
  return (
    <div>
      <h2>View 2</h2>

      <ul>
        {data2.todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
