import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import commonReducer from './common'
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        common: commonReducer,
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
setupListeners(store.dispatch);
export default store;