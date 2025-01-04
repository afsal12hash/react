import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MyAxios() {
//  api link 
  const api = "https://677639d712a55a9a7d0aebd4.mockapi.io/axios1"

  const navi = useNavigate()

  const initData = {
    firstname: "",
    lastname: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    state: "",

  }

  function reduce(state, action){
    if(action.type === "textData") {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    else if(action.type === 'update'){
      return {
          ...state,
          ...action.data
      }
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
    // window.location.reload()
    alert('created')
  })
  .catch((error)=>{console.log(error);
  })
}


// GET METHOD 
const [views, setViews] = useState([]);
useEffect(()=>{
  axios.get(api)
  .then((response)=>{
    setViews(response.data)
  })
  .catch((error)=>{ console.log(error);})

})


// EDIT METHOD 

const [edit,setEdit]= useState(false)
function setupEdit(){
  const id = localStorage.getItem("_id");
  axios.get(`${api}/${id}`)
  .then((res)=>{
    dispatch({
      type:'update',
      data:res.data
    })
    setEdit(true)

  })
  .catch((error)=>{ console.log(error);})
}

// PUT 

function handleUpdate(e){
  e.preventDefault();
  const id = localStorage.getItem("_id")
  axios.put(`${api}/${id}`,state)
  .then(()=>{
    alert("Updated Successfully")
    setEdit(false);
    localStorage.clear()
    window.location.reload()
  })
  .catch((error)=>{ console.log(error);})
}

// DELETE 
function handleDelete(id){
  
  axios.delete(`${api}/${id}`)
  .then(()=>{
    alert("Deleted Successfully")
    // window.location.reload()

  })
  .catch((error)=>{ console.log(error);})
}

  return (
    <div>
     
      <form class="card mx-auto d-block" style={{ width: "40%" }} onSubmit={
        edit?
        handleUpdate:
        handleSubmit

      }>
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
      
          <div class="col-12 mt-3">
            <button class="btn btn-primary" type="submit">
              {
                edit?
                "Update form":
                "Submit form"
              }
            </button>
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
          
            <th>Zip</th>
          </tr>
        </thead>

        <tbody>
          {
            views.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
             

                  <td>{item.zip}</td>
                  <td>
              {/*     <button className='btn btn-primary'
                    onClick={()=>{
                      localStorage.setItem("_id",item.id);
                      setupEdit()
                    }}
                  >Edit</button> */}
                  <button className='btn btn-primary'
                    onClick={()=>{
                      navi('/edit/'+item.id)
                    }}
                  >Edit</button>
            
                  <button className='btn btn-danger ms-2' onClick={()=>{
                    handleDelete(item.id)
                  }}>Delete</button>
                </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
