import bcrypt from 'bcrypt';
import supabase from '../../lib/supabaseClient.js';

// Create a new user
export const createUser = async (name, email, password) => {
    try {
        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    name,
                    email,
                    password_hash: hashedPassword
                }
            ])
            .select(); // returns inserted data

        if (error) {
            console.error('Error inserting user:', error.message);
            throw error;
        }

        return data[0];
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
};

// Get all users
export const getUsers = async () => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw error;
    }
};

// Get user by ID
export const getUserById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Error fetching user by ID:', error.message);
        throw error;
    }
};