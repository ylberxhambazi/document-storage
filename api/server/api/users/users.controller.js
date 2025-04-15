// api/users/users.controller.js

import sql from '../../lib/supabaseClient.js';

// Create a new user
export const createUser = async (name, email, password) => {
    try {
        const result = await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${password})
            RETURNING *;
        `;
        return result[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Get all users
export const getUsers = async () => {
    try {
        const result = await sql`
            SELECT * FROM users;
        `;
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Get user by ID
export const getUserById = async (id) => {
    try {
        const result = await sql`
            SELECT * FROM users WHERE id = ${id};
        `;
        return result[0];
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};
