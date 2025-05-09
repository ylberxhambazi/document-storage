import { apiSlice } from '@/app/_redux/api/apiSlice'
import { EProvidesTags } from '@/types/enum/queryTags'
import { TLog } from '@/types/request/log'

export const logsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLogs: builder.query<TLog[], void>({
            query: () => '/logs',
            providesTags: [EProvidesTags.Logs]
        }),
    }),
})

export const { useGetLogsQuery } = logsApi