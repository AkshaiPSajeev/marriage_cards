import {createSlice} from '@reduxjs/toolkit'

export const modalSlice=createSlice(
    {
        name:'modal',
        initialState:{
            showModal:false
        },
        reducers:{
            closeModal:(state)=>{state.showModal=false},
            openModal:(state)=>{state.showModal=true},
           
        }
    }
);

export const {closeModal,openModal}=modalSlice.actions;
export default modalSlice.reducer;