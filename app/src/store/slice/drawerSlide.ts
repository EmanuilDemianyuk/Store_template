import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
    name: "basket", 
    initialState: {
        openRight: false,
    },
    reducers: {
        handlerDrawerSlide: (state, action:PayloadAction<boolean>) => {
            state.openRight = action.payload;
        },
    }
})

export const drawerReducer = drawerSlice.reducer;
export const drawerAction = drawerSlice.actions;