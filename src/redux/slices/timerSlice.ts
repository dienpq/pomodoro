import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pomodoro: 15 * 60,
    shortBreak: 5* 60,
    longBreak: 25* 60,
}

const timerSlice = createSlice({
    name: "timer",
    initialState: initialState,
    reducers: {
        changePomodoro: (state, action) => {
            state.pomodoro = action.payload;
        },
        changeShortBreak: (state, action) => {
            state.shortBreak = action.payload;
        },
        changeLongBreak: (state, action) => {
            state.longBreak = action.payload;
        }
    },
});

export const { changePomodoro, changeShortBreak, changeLongBreak } = timerSlice.actions;
export default timerSlice.reducer;
