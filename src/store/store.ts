import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./contactSlice";

const store = configureStore({
    reducer:{
        contacts : ContactReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store