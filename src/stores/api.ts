import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

export const { useLoginByGoogleMutation } = api;