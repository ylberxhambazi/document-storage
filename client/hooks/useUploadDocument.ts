// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export function useUploadDocument() {
//     return useMutation({
//         mutationFn: async (formData: FormData) => {
//             const { data } = await axios.post('/api/documents', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             return data;
//         },
//         onSuccess: () => {
//             toast.success('Document uploaded successfully!');
//         },
//         onError: (error) => {
//             const message = error instanceof Error ? error.message : "Upload failed";
//             console.error(message);
//             toast.error(message);
//         },
//     });
// }