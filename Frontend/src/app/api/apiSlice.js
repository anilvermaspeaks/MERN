import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})