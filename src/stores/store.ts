import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import commonReducer from './common'
import userReducer from './user'
import { api, appMiddleware } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        common: commonReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appMiddleware),
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
setupListeners(store.dispatch);
export default store;