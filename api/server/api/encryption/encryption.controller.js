import supabase from '../../lib/supabaseClient.js';
import { encryptKey, decryptKey } from '../../utils/encryptionUtilis.js';

// Create a new encryption key (securely encrypted before storing)
export const createEncryptionKey = async (userId, plainKey) => {
    try {
        const { encryptedKey, iv, tag } = encryptKey(plainKey);

        const { data, error } = await supabase
            .from('encryption_keys')
            .insert([{ user_id: userId, encrypted_key: encryptedKey, iv, tag }])
            .select();

        if (error) throw error;
        return data[0];
    } catch (error) {
        console.error('Error creating encryption key:', error);
        throw error;
    }
};

// Get and decrypt encryption keys
export const getDecryptedEncryptionKeys = async () => {
    try {
        const { data, error } = await supabase
            .from('encryption_keys')
            .select('*');

        if (error) throw error;

        return data.map((entry) => ({
            userId: entry.user_id,
            decryptedKey: decryptKey({
                encryptedKey: entry.encrypted_key,
                iv: entry.iv,
                tag: entry.tag
            })
        }));
    } catch (error) {
        console.error('Error fetching and decrypting encryption keys:', error);
        throw error;
    }
};
