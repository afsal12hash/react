import React, { useEffect, useReducer } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditAxios() {
    const api = 'https://677639d712a55a9a7d0aebd4.mockapi.io/axios2'
    /* get id form path */
    const {id} = useParams();

    const navigate = useNavigate();

    const initData = {
        username: "",
        email: "",
        password: "",
        land: "",
        place: ""
    };

    function reduce(state, action) {
        if (action.type === "textData") {
            return {
                ...state,
                [action.field]: action.payload,
            };
        }
        else if (action.type === 'update') {
            return {
                ...state,
                ...action.data
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
            payload: value,
        });
    }

    /* to load old data */
    useEffect(()=>{
        axios.get(`${api}/${id}`)
        .then((res)=>{
            dispatch({
                type:'update',
                data:res.data
            })
        })
        .catch((error) => { console.log(error); })
    },[id])

    /* Update method */
    function handleSubmit(e){
        e.preventDefault();
        axios.put(`${api}/${id}`,state)
        .then(()=>{
            alert("updated");
            navigate('/')
        })
        .catch((error) => { console.log(error); })
    }
    return (
        <div>
            <h4>Edit Form</h4>
            <form className="card w-50 mx-auto d-block">
                <div className="card-body">
                    <label htmlFor="" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                        id=""
                    />
                    <label htmlFor="" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        id=""
                    />
                    <label htmlFor="" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        id=""
                    />
                    <label htmlFor="" className="form-label">
                        District
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="land"
                        value={state.land}
                        onChange={handleChange}
                        id=""
                    />
                    <label htmlFor="" className="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="place"
                        value={state.place}
                        onChange={handleChange}
                        id=""
                    />

                    <div className="text-center">
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                           Update
                        </button>
                    </div>
                </div>


            </form>
        </div>
    )
}
