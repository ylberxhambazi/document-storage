'use client'

import { useGetDocumentsQuery } from '@/lib/documentApiSlice'
import DocumentCard from './cards/DocumentCard'

export default function DocumentList() {
    const { data: documents, isLoading, isError } = useGetDocumentsQuery()

    if (isLoading) {
        return <div>{'Loading documents...'}</div>
    }

    if (isError) {
        return <div>{'Failed to load documents.'}</div>
    }

    if (!documents || documents.length === 0) {
        return <div className='text-center text-gray-500'>{'No documents found. Try uploading one!'}</div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {documents.map(document => (
                <DocumentCard key={document.id} document={document} />
            ))}
        </div>
    )
}