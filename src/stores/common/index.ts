import { createSlice } from '@reduxjs/toolkit';
import type {Navigate} from "../../utils/types";
interface ICommon {
    currentRoute: Navigate
}
const commonSlice = createSlice({
    name: 'common',
    initialState: {} as ICommon,
    reducers: {
        setCurrentRoute(state, { payload }) {
            state.currentRoute = payload
        }
    },
});

export const { setCurrentRoute } = commonSlice.actions;
export default commonSlice.reducer;