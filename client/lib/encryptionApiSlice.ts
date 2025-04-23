import { apiSlice } from "@/app/_redux/api/apiSlice";
import { TEncryptionKey } from "@/types/request/encryption";

export const encryptionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEncryptionKeys: builder.query<TEncryptionKey[], void>({
            query: () => 'encryption-keys',
        }),
        createEncryptionKey: builder.mutation<TEncryptionKey, { key: string }>({
            query: (body) => ({
                url: 'encryption-keys',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetEncryptionKeysQuery, useCreateEncryptionKeyMutation } = encryptionApi;