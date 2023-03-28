import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export default store;