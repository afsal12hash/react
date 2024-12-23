import React from 'react'
import ChildProp from './ChildProp';

export default function ParentProp() {
    const royalEnfieldModels = [
        "Classic 350",
        "Meteor 350",
        "Interceptor 650",
        "Continental GT 650",
        "Hunter 350",
        "Bullet 350",
        "Bullet 500",
        "Himalayan",
        "Scram 411",
        "Guerrila 450",
        "Shotgun 650 "
    ];

    return (
        <div>
            <h3>Parent File</h3>
            <ol>
                {
                    royalEnfieldModels.map((item,index)=>{
                        return(
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })
                }
            </ol>

            <ChildProp REModels={royalEnfieldModels} />
        </div>
    )
}
