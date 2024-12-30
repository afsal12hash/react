import React, { useContext } from 'react'
import { arrContext } from './MainContext'

export default function ContextDisplay2() {

    const data2 = useContext(arrContext);
    return (
        <div>
            <h2>Display 2</h2>

            <ul>
                {
                    data2.todos.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
