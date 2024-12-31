import React, { useReducer } from 'react'

export default function UseReducerHook() {

    const initData = {
        username: "",
        email: "",
        todos: []
    }

    function reduce(state, action) {
        if (action.type === "textData") {
            return {
                ...state,
                [action.field]: action.payload
            }
        }
        else if(action.type === 'addTodo'){
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        username:state.username,
                        email:state.email
                    }
                ]
            }
        }
        else {
            return state;
        }
    }


    const [state, dispatch] = useReducer(reduce, initData);

    function handleChange(e) {
        const { name, value } = e.target;

        dispatch({
            type: "textData",
            field: name,
            payload: value
        })
    }

    return (
        <div>
            <form className="card w-50 mx-auto d-block">
                <div className="card-body">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className='form-control' name="username" value={state.username} onChange={handleChange} id="" />
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" className='form-control' name="email" value={state.email} onChange={handleChange} id="" />

                    <div className="text-center">
                        <button className='btn btn-primary' onClick={(e)=>{
                            e.preventDefault();

                            dispatch({
                                type:"addTodo"
                            })

                            console.log(state.todos);
                            
                        }}>Add</button>
                    </div>
                </div>

                <h2>Result <br />
                    username : {state.username} <br />
                    email : {state.email}
                </h2>
            </form>

            <ol>
                {
                    state.todos.map((item)=>(
                        <li>{item.username} - {item.email}</li>
                    ))
                }
            </ol>
        </div>
    )
}
