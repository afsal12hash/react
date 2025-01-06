import { createSlice } from "@reduxjs/toolkit";

const arrSlice = createSlice({
    // name also used for extra reducers
    name:'arr',
    // for initial data (object or direct data)
    initialState:{
        data:[]
        
    },
    reducers:{

        //add data to array
        addData:(state,action)=>{
            state.data.push(action.payload);
        },

        // remove data from array
        removeData:(state,action)=>{
            const index = state.data.findIndex((item)=>item.id===action.payload);

            state.data.splice(index,1);
        }
    }
})

export const {addData,removeData} = arrSlice.actions; // jsx files

export default arrSlice.reducer; // storage mention