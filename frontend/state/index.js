import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light",
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setMode, setLogin, logout } = authSlice.actions;
export default authSlice.reducer;