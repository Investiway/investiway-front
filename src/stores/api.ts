import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {createSlice} from "@reduxjs/toolkit";
import { Middleware } from "@reduxjs/toolkit";
import {AppState} from "./store";

interface Result {
    data: string
}
export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8010/v1/',
    }),

    endpoints: (builder) => ({
        loginByGoogle: builder.mutation<string, string>({
            query: () => ({
                url: '/auth/google',
                method: 'GET',
            })
        }) ,
        getUser:builder.query({
            query: () => 'Users'
        })
    }),
});
export const middlewareSlice = createSlice({
    name: 'middleware',
    initialState: {
        isAuth: false
    },
    reducers: {

    },

})

export const appMiddleware: Middleware = (store) => (next) => (action) => {
    const state:AppState = store.getState()
    if (state.user.token)
        return next(action);
};
export const { useLoginByGoogleMutation } = api;