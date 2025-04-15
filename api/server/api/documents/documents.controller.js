// api/documents/documents.controller.js

import sql from '../../lib/supabaseClient.js';

// Create a new document
export const createDocument = async (title, content, userId) => {
    try {
        const result = await sql`
            INSERT INTO documents (title, content, user_id)
            VALUES (${title}, ${content}, ${userId})
            RETURNING *;
        `;
        return result[0];
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

// Get all documents
export const getDocuments = async () => {
    try {
        const result = await sql`
            SELECT * FROM documents;
        `;
        return result;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

// Get document by ID
export const getDocumentById = async (id) => {
    try {
        const result = await sql`
            SELECT * FROM documents WHERE id = ${id};
        `;
        return result[0];
    } catch (error) {
        console.error('Error fetching document by ID:', error);
        throw error;
    }
};
