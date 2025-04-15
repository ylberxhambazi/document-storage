// util/logAction.js
const supabase = require('../lib/supabaseClient.js');

const logAction = async (userId, action, documentId = null) => {
    const { error } = await supabase.from('access_logs').insert([
        { user_id: userId, action, document_id: documentId }
    ]);
    if (error) console.error('Log error:', error);
};

module.exports = { logAction };
