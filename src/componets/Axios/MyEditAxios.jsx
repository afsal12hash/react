import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MyEditAxios() {
    // api link 
    const { id } = useParams()
    const navi = useNavigate()

    const api = "https://677639d712a55a9a7d0aebd4.mockapi.io/axios1"


    const initData = {
        firstname: "",
        lastname: "",
        username: "",
        city: "",
        state: "",
        zip: "",
        state: "",

    }

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
    const [state, dispatch] = useReducer(reduce, initData)
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: "textData",
            field: name,
            payload: value,
        })
    }

    useEffect(() => {
        axios.get(`${api}/${id}`)
            .then((res) => {
                dispatch({
                    type: 'update',
                    data: res.data
                })

            })
            .catch((error) => { console.log(error); })

    }, [id])

    function HandleUpdated(e){
        e.preventDefault()
        axios.put(`${api}/${id}`,state)
  .then(()=>{
    alert("Updated Successfully")
    navi('/')
  })
  .catch((error)=>{ console.log(error);})
    }
    return (
        <div>
             <h2>update form</h2>
            <form
                class="card mx-auto d-block"
                style={{ width: "40%" }}
                onSubmit={HandleUpdated}
            >
                <div className="card-body row">
                    <div class="col-md-6">
                        <label for="validationDefault01" class="form-label">
                            First name
                        </label>
                        <input
                            type="text"
                            style={{ border: "2px solid red" }}
                            name="firstname"
                            value={state.firstname}
                            onChange={handleChange}
                            class="form-control"
                            id="validationDefault01"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault02" class="form-label">
                            Last name
                        </label>
                        <input
                            type="text"
                            name="lastname"
                            value={state.lastname}
                            onChange={handleChange}
                            class="form-control"
                            id="validationDefault02"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefaultUsername" class="form-label">
                            Username
                        </label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">
                                @
                            </span>
                            <input
                                type="text"
                                name="username"
                                value={state.username}
                                onChange={handleChange}
                                class="form-control"
                                id="validationDefaultUsername"
                                aria-describedby="inputGroupPrepend2"
                                required
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={state.city}
                            onChange={handleChange}
                            class="form-control"
                            id="validationDefault03"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault04" class="form-label">
                            State
                        </label>
                        <select
                            name="state"
                            value={state.state}
                            onChange={handleChange}
                            class="form-select"
                            id="validationDefault04"
                            required
                        >
                            <option selected disabled value="">
                                Choose...
                            </option>
                            <option>TamilNadu</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault05" class="form-label">
                            Zip
                        </label>
                        <input
                            type="text"
                            name="zip"
                            value={state.zip}
                            onChange={handleChange}
                            class="form-control"
                            id="validationDefault05"
                            required
                        />
                    </div>

                    <div class="col-12 mt-3">
                        <button class="btn btn-primary" type="submit">
                            Update Forms
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
