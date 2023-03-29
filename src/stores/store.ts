import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import commonReducer from './common'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        common: commonReducer
    },
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export default store;