import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSchedule = createAsyncThunk("schedule/fetchSchedule", async (_, thunkAPI) => {
    try {
        const requestOptions = {
            valueSearch: "",
            valueRadioButton: "",
            valueLocation: 1,
        };
        const { data } = await axios.post("/schedule.php", requestOptions);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const initialState = {
    items: [],
    status: "idle",
    error: null,
};

const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSchedule.pending]: (state) => {
            state.status = "loading";
        },
        [fetchSchedule.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "fulfilled";
        },
        [fetchSchedule.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = "rejected";
            state.items = [];
        },
    },
});

export const selectSchedule = (state) => state.schedule.items;
export const selectScheduleStatus = (state) => state.schedule.status;
export const selectScheduleError = (state) => state.schedule.error;
export const scheduleReducer = scheduleSlice.reducer;
