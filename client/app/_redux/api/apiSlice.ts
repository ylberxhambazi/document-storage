import { EProvidesTags } from '@/types/enum/queryTags'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
    credentials: 'same-origin',
    prepareHeaders: headers => {
        const token = localStorage.getItem('token')
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithAuth,
    tagTypes: Object.values(EProvidesTags),
    endpoints: builder => ({})
})