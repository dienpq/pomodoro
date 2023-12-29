import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./slices/timerSlice";

const store = configureStore({
    reducer: {
        timer: timerSlice
    },
});

export default store;