import {authReducer} from "./Slices/auth";
import {configureStore} from "@reduxjs/toolkit";
import {scheduleReducer} from "./Slices/schedule";

const store = configureStore({
    reducer: {
        auth: authReducer,
        schedule: scheduleReducer
    }
});

export default store;