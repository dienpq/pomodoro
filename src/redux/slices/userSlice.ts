import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Phan Quan Điện"
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        changeUser: (state, action) => {
            state.name = action.payload;
        }
    },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
