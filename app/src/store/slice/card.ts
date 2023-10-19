import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../typesOrInterface/interface";
import { localStorageManager } from "../../classes/StorageManager";
import { ORDER__CACHE__KEY } from "../../constants/localStorageKey";

const localData = localStorageManager.getItem<IProduct[]>(ORDER__CACHE__KEY)

const initialState: IProduct[] = localData && Array.isArray(localData) ? [...localData] : [];

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<IProduct>) => {
            const { payload } = action;
            state.push(payload);
            localStorageManager.setItem<IProduct[]>(ORDER__CACHE__KEY, state)
        },
        remodeItem: (state, action:PayloadAction<{id: number}>) => {
            const { payload: {id} } = action;
            state = state.filter(p => p.id !== id)
            localStorageManager.setItem<IProduct[]>(ORDER__CACHE__KEY, state)
            return state;
        },
    }
})


export const cardReducer = cardSlice.reducer;
export const cardAction = cardSlice.actions;