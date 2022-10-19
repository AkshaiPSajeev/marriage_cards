import {createSlice} from '@reduxjs/toolkit'
import api from '../API/api.json'

const emptyobj={
    "id": '',
    "date": '',
    "title": "",
    "content": "",
    "thumbnail": {
      "large": "",
      "small": ""
    },
    "author": {
      "name": "",
      "avatar": "",
      "role": ""
    }
  }
export const detailsSlice=createSlice(
    {
        name:'details',
        initialState:emptyobj,
        reducers:{
            setDetails:(state,action)=>{
                
                const details=api.filter((obj)=>{return obj.id===action.payload});
                let obj=details[0]
                return {...obj}
            },
            unsetDetails:(state)=>{return {...emptyobj}},
           
        }
    }
);

export const {setDetails,unsetDetails}=detailsSlice.actions;
export default detailsSlice.reducer;