import crypto from 'crypto';

const MASTER_KEY = Buffer.from(process.env.MASTER_KEY, 'hex');

export const encryptKey = (plainKey) => {
    const iv = crypto.randomBytes(12); // AES-GCM requires 12 bytes IV
    const cipher = crypto.createCipheriv('aes-256-gcm', MASTER_KEY, iv);

    let encrypted = cipher.update(plainKey, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    const tag = cipher.getAuthTag().toString('base64');

    return {
        encryptedKey: encrypted,
        iv: iv.toString('base64'),
        tag
    };
};

export const decryptKey = ({ encryptedKey, iv, tag }) => {
    const decipher = crypto.createDecipheriv(
        'aes-256-gcm',
        MASTER_KEY,
        Buffer.from(iv, 'base64')
    );
    decipher.setAuthTag(Buffer.from(tag, 'base64'));

    let decrypted = decipher.update(encryptedKey, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
};
