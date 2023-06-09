import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    name: null,
    stateChange: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // updateUserProfile: (state, {payload}) => ({
        //     ...state, 
        //     userId: payload.userId,
        //     name: payload.name,
        // }),
        // authStateChange: (state, {payload}) => ({
        //     ...state, 
        //     stateChange: payload.stateChange,
        // }),
    },
})
