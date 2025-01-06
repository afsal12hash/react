import { configureStore } from "@reduxjs/toolkit";
import ArrReducer from './ArrSlice';

//storage configers
export default configureStore({
    reducer:{
        arr:ArrReducer
    }
})