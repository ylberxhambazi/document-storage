import supabase from '../../lib/supabaseClient.js';

// Create a new log entry
export const createAccessLog = async (userId, action, documentId = null) => {
    try {
        const { data, error } = await supabase
            .from('access_logs')
            .insert([{ user_id: userId, action, document_id: documentId }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating access log:', error);
        throw error;
    }
};

// Get all access logs
export const getAccessLogs = async () => {
    try {
        const { data, error } = await supabase
            .from('access_logs')
            .select('*');

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching access logs:', error);
        throw error;
    }
};
