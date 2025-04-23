import DocumentList from '@/components/DocumentList'
import UploadDocumentForm from '@/components/forms/UploadDocumentForm'
import DashboardLayout from '@/components/layout/DashboardLayout'
import React from 'react'

const DocumentData = () => {
    return (
        <DashboardLayout>
            <div className='space-y-8'>
                <h1 className='text-2xl font-bold'>{'Documents'}</h1>
                <UploadDocumentForm />
                <DocumentList />
            </div>
        </DashboardLayout>
    )
}

export default DocumentData