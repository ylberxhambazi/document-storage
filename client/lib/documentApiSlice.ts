import { apiSlice } from "@/app/_redux/api/apiSlice";
import { EProvidesTags } from "@/types/enum/queryTags";
import { TUploadDocumentRequest } from "@/types/request/document";
import { TDocument } from "@/types/response/document";

export const documentsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        uploadDocument: builder.mutation<TDocument, TUploadDocumentRequest>({
            query: (body) => ({
                url: '/documents',
                method: 'POST',
                body,
            }),
            invalidatesTags: [EProvidesTags.Documents],
        }),
        getDocuments: builder.query<TDocument[], void>({
            query: () => '/documents',
            providesTags: [EProvidesTags.Documents],
        }),
    }),
});

export const { useGetDocumentsQuery, useUploadDocumentMutation } = documentsApi;