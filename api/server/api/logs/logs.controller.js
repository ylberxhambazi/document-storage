// api/logs/logs.controller.js

import sql from '../../lib/supabaseClient.js';

// Create a new log entry
export const createAccessLog = async (userId, action, documentId = null) => {
    try {
        const result = await sql`
            INSERT INTO access_logs (user_id, action, document_id)
            VALUES (${userId}, ${action}, ${documentId})
            RETURNING *;
        `;
        return result[0];
    } catch (error) {
        console.error('Error creating access log:', error);
        throw error;
    }
};

// Get all access logs
export const getAccessLogs = async () => {
    try {
        const result = await sql`
            SELECT * FROM access_logs;
        `;
        return result;
    } catch (error) {
        console.error('Error fetching access logs:', error);
        throw error;
    }
};
