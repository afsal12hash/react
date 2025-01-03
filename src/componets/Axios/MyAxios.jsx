import axios from 'axios';
import React, { useReducer } from 'react'

export default function MyAxios() {
//  api link 
  const api = "https://677639d712a55a9a7d0aebd4.mockapi.io/axios1"


  const initData = {
    firstname: "",
    lastname: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    state: "",
    check:""
  }

  function reduce(state, action){
    if(action.type === "textData") {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    else{
      return state;
    }
  }
  const [state, dispatch] = useReducer(reduce, initData)
  function handleChange(e){
    const {name,value} = e.target;
    dispatch({
      type:"textData",
      field:name,
      payload:value,
    })
  }
/* POST \ */

function handleSubmit(e) {
  e.preventDefault();
  axios.post(api, state)
  .then(()=>{
    window.location.reload()
  })
  .catch((error)=>{console.log(error);
  })
}
  return (
    <div>
      <form class="card mx-auto d-block" style={{ width: "40%" }} onSubmit={handleSubmit}>
        <div className="card-body row">

          <div class="col-md-6">
            <label for="validationDefault01" class="form-label">First name</label>
            <input type="text" style={{ border: "2px solid red" }} name='firstname' value={state.firstname} onChange={handleChange} class="form-control" id="validationDefault01" required />
          </div>
          <div class="col-md-6">
            <label for="validationDefault02" class="form-label">Last name</label>
            <input type="text" name='lastname' value={state.lastname} onChange={handleChange} class="form-control" id="validationDefault02" required />
          </div>
          <div class="col-md-6">
            <label for="validationDefaultUsername" class="form-label">Username</label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" name='username' value={state.username} onChange={handleChange} class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationDefault03" class="form-label">City</label>
            <input type="text" name='city' value={state.city} onChange={handleChange} class="form-control" id="validationDefault03" required />
          </div>
          <div class="col-md-6">
            <label for="validationDefault04" class="form-label">State</label>
            <select name='state' value={state.state} onChange={handleChange} class="form-select" id="validationDefault04" required>
              <option selected disabled value="">Choose...</option>
              <option>TamilNadu</option>

            </select>
          </div>
          <div class="col-md-6">
            <label for="validationDefault05" class="form-label">Zip</label>
            <input type="text" name='zip' value={state.zip} onChange={handleChange} class="form-control" id="validationDefault05" required />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input name='check' value={state.check} onChange={handleChange} class="form-check-input" type="checkbox" id="invalidCheck2" required />
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </div>

      </form>

      <table className="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Username</th>
            <th>City</th>
            <th>State</th>
            <th>Check  Agree to terms</th>
            <th>Zip</th>
          </tr>
        </thead>

        <tbody>
          {
            // views.map((item,index) => {
            //   return (
            //     <tr key={index}>
            //       <td>{item.firstname}</td>
            //       <td>{item.lastname}</td>
            //       <td>{item.username}</td>
            //       <td>{item.city}</td>
            //       <td>{item.state}</td>
            //       <td>{item.check}</td>

            //       <td>{item.zip}</td>

            //     </tr>
            //   )
            // })
          }
        </tbody>
      </table>
    </div>
  )
}
