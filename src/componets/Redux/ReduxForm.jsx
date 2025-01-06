import React, { useState } from 'react';
import { addData,removeData } from './ArrSlice';
import { useSelector,useDispatch } from 'react-redux';

export default function ReduxForm() {

    const array = useSelector(state=>state.arr.data);
    const dispatch = useDispatch();

    const [formData,setFormData] = useState({
        id:1,
        name:"",
        email:""
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(w){
        w.preventDefault();

        dispatch(addData(formData));

        setFormData({
            id:formData.id+1,
            name:"",
            email:""
        })
    }
  return (
    <div>
        <h2>Redux Demo</h2>
        <form className='card card-body w-50 mx-auto d-block' onSubmit={handleSubmit}>
                <label htmlFor="" className="form-label">ID</label>
                <input type="text" name="id" value={formData.id} id="" className="form-control" disabled />

                <label htmlFor="" className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} id="" className="form-control"/>

                <label htmlFor="" className="form-label">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} id="" className="form-control"/>

                <button type="submit" className='btn btn-dark mt-3'>Submit</button>
        </form>

        <table className="table mt-3">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={()=>{
                                            dispatch(removeData(item.id))
                                        }}
                                    >Delete</button>
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
