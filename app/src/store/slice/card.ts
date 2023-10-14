import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/products.type";

const localDate: [] = [];

const initialState: IProduct[] = [
    ...localDate,
];

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<IProduct>) => {
            state.push(action.payload)
        },
        remodeItem: (state, action:PayloadAction<{id: number}>) => {
            return state.filter(p => p.id !== action.payload.id)
        },
    }
})


export const cardReducer = cardSlice.reducer;
export const cardAction = cardSlice.actions;