import {configureStore} from "@reduxjs/toolkit";
import {scheduleReducer} from "./Slices/schedule";

const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
    }
})

export default store;