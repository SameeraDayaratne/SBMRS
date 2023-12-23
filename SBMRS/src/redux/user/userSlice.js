import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser : null,
    error : null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        signInSuccess : (state, action) => {
            state.currentUser = action.payload;
            state.error = false;
        },
        signInFaliure : (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { signInFaliure , signInSuccess} = userSlice.actions;

export default userSlice.reducer;