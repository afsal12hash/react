import React, { useEffect, useReducer, useState } from "react";

import axios from "axios";

export default function Axios() {

    const api = 'https://677639d712a55a9a7d0aebd4.mockapi.io/axios1'

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

    /* Post method */
    function handleSubmit(e) {
        e.preventDefault();

        axios.post(api, state)
            .then(() => {
                window.location.reload()
            })
            .catch((error) => { console.log(error); })
    }

    /* Get Method */
    const [views, setViews] = useState([]);

    useEffect(() => {
        axios.get(api)
            .then((response) => {
                setViews(response.data)
            })
            .catch((error) => { console.log(error); })
    }, [api])

    return (
        <div>
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
                            Add
                        </button>
                    </div>
                </div>

                {/* <h2>
          Result <br />
          username : {state.username} <br />
          email : {state.email} <br />
          Password: {state.password} <br />
          District: {state.land} <br />
          Password: {state.place} <br />
        </h2> */}
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Land</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        views.map((item,index)=>{
                            return(
                                <tr key={index}> 
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.land}</td>
                                    <td>{item.place}</td>
                                    <td>
                                        <button className="btn btn-dark">Edit</button>
                                        <button className="btn btn-danger ms-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}