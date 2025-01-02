import React, { useReducer } from "react";

export default function MyUseReducerHook() {
  const initData = {
    FirstName: "",
    LastName: "",
    todos: [],
  };
  function reduce(state, action) {
    if (action.type === "textData") {
      return {
        ...state,
        [action.field]: action.payload,
      };
    } else if (action.type === "addTodo") {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            FirstName: state.FirstName,
            LastName: state.LastName,
          },
        ],
      };
    } else {
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
  return (
    <div>
      <form className="card w-50 mx-auto d-block">
        <div className="card-body">
          <label htmlFor="" className="form-label">
          FirstName
          </label>
          <input type="text" className="form-control"  name="FirstName" value = {state.FirstName} onChange={handleChange} id="" />

          <label htmlFor="" className="form-label">
            LastName
          </label>
          <input type="text" className="form-control" name="LastName"  value = {state.LastName} onChange={handleChange} id="" />

          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();

                dispatch({
                  type: "addTodo",
                });
                console.log(state.todos);
              }}
            >
              ADDING
            </button>
          </div>
        </div>
        <h5>
          {" "}
          Result FirstName : {state.FirstName} <br /><br /><br />
          LastName : {state.LastName}
        </h5>
      </form>
      <ol>
        {state.todos.map((item) => (
          <li>
            {item.FirstName} - {item.LastName}
          </li>
        ))}
      </ol>
    </div>
  );
}
