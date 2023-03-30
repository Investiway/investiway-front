import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8010/v1',
        headers: {
            authorization: `Bearer ` + localStorage.getItem('token')
        }
    }),

    endpoints: (builder) => ({
        loginByGoogle: builder.mutation({
            query: () => ({
                url: '/auth/google',
                method: 'GET',
            })
        }) ,
        loginByFacebook: builder.mutation({
            query: () => ({
                url: '/auth/facebook',
                method: 'GET',
            })
        }) ,
        getUser:builder.mutation({
            query: () => ({
                url: '/auth/access',
                method: 'GET'
            })
        })
    }),
});
export const { useLoginByGoogleMutation, useLoginByFacebookMutation, useGetUserMutation } = api;