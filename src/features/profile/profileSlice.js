import { createSlice } from '@reduxjs/toolkit'
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
const initialState = {
        details:{}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeProfile:(state,action)=>{
            state.details=action.payload
            const uid=uuid.v4()
            database()
                .ref('/users/'+uid)
                .update(action.payload)
                .then(() => console.log('Data updated for User Id'+uid))
                .catch((error)=>console.log(error))


        }

    },
})

// Action creators are generated for each case reducer function
export const { changeProfile} = profileSlice.actions

export default profileSlice.reducer
