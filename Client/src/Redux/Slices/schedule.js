import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async () => {
    let data;

    await axios.post("/schedule.php", {
        valueSearch: "",
        valueRadioButton: "",
        valueLocation: 1
    }).then(response => data = response.data);
    console.log(data);
    return data;
});

const initialState = {
    schedule: {
        items: [],
        status: "loading"
    }
};

const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducer: {},
    extraReducers: {
        [fetchSchedule.pending] : (state) => {
            state.schedule.status = 'loading';
        },
        [fetchSchedule.fulfilled] : (state, action) => {
            state.schedule.items = action.payload;
            state.schedule.status = "loaded";
        },
        [fetchSchedule.rejected] : (state) => {
            state.schedule.items = [];
            state.schedule.status = "error";
        }
    }
});

export const scheduleReducer = scheduleSlice.reducer;