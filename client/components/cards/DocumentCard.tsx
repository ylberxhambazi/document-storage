'use client'

import { TDocument } from '@/types/response/document'

type DocumentCardProps = {
    document: TDocument;
}

export default function DocumentCard({ document }: DocumentCardProps) {
    return (
        <div className='border rounded-lg p-4 shadow hover:shadow-lg transition'>
            <h2 className='text-lg font-bold mb-2'>{document.filename}</h2>
            <p className='text-gray-600 break-words'>{document.file_size}</p>
        </div>
    )
}