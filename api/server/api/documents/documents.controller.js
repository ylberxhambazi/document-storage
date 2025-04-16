import supabase from '../../lib/supabaseClient.js';

export const createDocument = async (title, content, userId) => {
    try {
        const { data, error } = await supabase
            .from('documents')
            .insert([{ title, content, user_id: userId }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

// Get all documents
export const getDocuments = async () => {
    try {
        const { data, error } = await supabase
            .from('documents')
            .select('*');

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

// Get document by ID
export const getDocumentById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('documents')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching document by ID:', error);
        throw error;
    }
};