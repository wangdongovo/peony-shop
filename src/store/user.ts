import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'peony',
        age: 18
    },
    reducers:{
        changeName(state, action){
            state.name = action.payload
        }
    }

})

export const { changeName } = userSlice.actions
export default userSlice.reducer