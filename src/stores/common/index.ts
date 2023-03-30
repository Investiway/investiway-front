import { createSlice } from '@reduxjs/toolkit';
import type {Navigate} from "../../utils/types";
interface ICommon {
    currentRoute: Navigate,
    isLoading: false | boolean,
}
const initialState:ICommon = {
    currentRoute: {} as Navigate,
    isLoading: false
}
const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setCurrentRoute(state, { payload }) {
            state.currentRoute = payload
        },
        setLoading(state, { payload }) {
            state.isLoading = payload
        }
    },
});

export const { setCurrentRoute, setLoading } = commonSlice.actions;
export default commonSlice.reducer;