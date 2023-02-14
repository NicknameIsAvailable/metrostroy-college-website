import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async () => {
    const {data} = await axios.post('/schedule.php');
    return data;
})