// api/encryption/encryption.controller.js

import sql from '../../lib/supabaseClient.js';

// Create a new encryption key
export const createEncryptionKey = async (userId, key) => {
    try {
        const result = await sql`
            INSERT INTO encryption_keys (user_id, key)
            VALUES (${userId}, ${key})
            RETURNING *;
        `;
        return result[0];
    } catch (error) {
        console.error('Error creating encryption key:', error);
        throw error;
    }
};

// Get all encryption keys
export const getEncryptionKeys = async () => {
    try {
        const result = await sql`
            SELECT * FROM encryption_keys;
        `;
        return result;
    } catch (error) {
        console.error('Error fetching encryption keys:', error);
        throw error;
    }
};
