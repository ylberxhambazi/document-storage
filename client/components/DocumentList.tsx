'use client';

import { useGetDocumentsQuery } from "@/lib/documentApiSlice";

export default function DocumentList() {
    const { data: documents, isLoading, error } = useGetDocumentsQuery();

    if (isLoading) return <p>Loading documents...</p>;
    if (error) return <p>Failed to load documents.</p>;

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Your Documents</h2>
            <ul className="list-disc pl-6">
                {documents?.map((doc) => (
                    <li key={doc.id}>
                        <span className="font-bold">{doc.filename}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}