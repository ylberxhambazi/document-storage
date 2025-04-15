// api/logs/logs.routes.js

import express from 'express';
import { createAccessLog, getAccessLogs } from './logs.controller.js';
import authenticate from '../../middleware/authMiddleware.js';

const router = express.Router();

// Route to get all access logs
router.get('/', authenticate, async (req, res) => {
    try {
        const logs = await getAccessLogs();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch access logs' });
    }
});

// Route to create a new access log
router.post('/', authenticate, async (req, res) => {
    const { userId, action, documentId } = req.body;
    try {
        const newLog = await createAccessLog(userId, action, documentId);
        res.status(201).json(newLog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create access log' });
    }
});

export default router;
