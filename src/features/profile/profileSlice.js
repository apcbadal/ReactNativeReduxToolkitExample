import { createSlice } from '@reduxjs/toolkit'
const initialState = {
        details:{}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeProfile:(state,action)=>{
            state.details=action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { changeProfile} = profileSlice.actions

export default profileSlice.reducer
