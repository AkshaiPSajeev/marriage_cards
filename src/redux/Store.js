import {configureStore} from '@reduxjs/toolkit'
import modalReducer from './ModalSlice'
import detailsReducer from './DetailsSlice'

export const store=configureStore(
    {
        reducer:{
            modal:modalReducer,
            details:detailsReducer
        }
    }
)