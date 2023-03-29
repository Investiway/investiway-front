import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
    name: 'common',
    initialState: {
        enableAside: false,
        currentRoute: 0
    },
    reducers: {
        setAsideMenu(state) {
            state.enableAside = !state.enableAside;
        },
        setCurrentRoute(state, { payload }) {
            state.currentRoute = payload
        }
    },
});

export const { setAsideMenu, setCurrentRoute } = commonSlice.actions;
export default commonSlice.reducer;