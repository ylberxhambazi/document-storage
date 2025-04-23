import { apiSlice } from "@/app/_redux/api/apiSlice";
import { TLoginRequest, TRegisterRequest } from "@/types/request/auth";
import { TLoginResponse, TRegisterResponse } from "@/types/response/auth";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<TLoginResponse, TLoginRequest>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<TRegisterResponse, TRegisterRequest>({
            query: (newUser) => ({
                url: 'auth/register',
                method: 'POST',
                body: newUser,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;