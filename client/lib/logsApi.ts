import { apiSlice } from "@/app/_redux/api/apiSlice";
import { TLog } from "@/types/request/log";


export const logsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLogs: builder.query<TLog[], void>({
            query: () => '/logs',
        }),
    }),
});

export const { useGetLogsQuery } = logsApi;
