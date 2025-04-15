// api/encryption/encryption.routes.js

import express from 'express';
import { createEncryptionKey, getEncryptionKeys } from './encryption.controller.js';
import authenticate from '../../middleware/authMiddleware.js';

const router = express.Router();

// Route to get all encryption keys
router.get('/', authenticate, async (req, res) => {
    try {
        const keys = await getEncryptionKeys();
        res.json(keys);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch encryption keys' });
    }
});

// Route to create a new encryption key
router.post('/', authenticate, async (req, res) => {
    const { userId, key } = req.body;
    try {
        const newKey = await createEncryptionKey(userId, key);
        res.status(201).json(newKey);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create encryption key' });
    }
});

export default router;
