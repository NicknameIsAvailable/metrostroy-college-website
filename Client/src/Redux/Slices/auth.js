import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

// 0 - админ 1 - студент 2 - препод 3

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (values) => {
    const {data} = await axios.post("/auth.php", {login: values.login, password: values.password, withCredentials: true});
    localStorage.setItem("userData", data);
    return data;
});

export const saveUserData = (data) => {
    return {
        type: "SAVE_DATA",
        payload: data
    }
};

const initialState = {
    data: null,
    status: "loading"
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'rejected'
            state.data = null
        },
    }
});

export const selectIsAuth = () => Boolean(window.localStorage.getItem('userData'));

export const authReducer = authSlice.reducer;

export const {logout} = authSlice.actions;