import supabase from '../../lib/supabaseClient.js';

// Create a new encryption key
export const createEncryptionKey = async (userId, key) => {
    try {
        const { data, error } = await supabase
            .from('encryption_keys')
            .insert([{ user_id: userId, key }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating encryption key:', error);
        throw error;
    }
};

// Get all encryption keys
export const getEncryptionKeys = async () => {
    try {
        const { data, error } = await supabase
            .from('encryption_keys')
            .select('*');

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching encryption keys:', error);
        throw error;
    }
};
