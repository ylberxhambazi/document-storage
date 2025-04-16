// routes/index.js

import express from 'express';
import authRoutes from '../api/auth/auth.routes.js';
import userRoutes from '../api/users/users.routes.js';
import documentRoutes from '../api/documents/documents.routes.js';
import encryptionRoutes from '../api/encryption/encryption.routes.js';
import logRoutes from '../api/logs/logs.routes.js';

const router = express.Router();

router.use('/api/auth', authRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);
router.use('/api/documents', documentRoutes);
router.use('/api/encryption', encryptionRoutes);
router.use('/api/logs', logRoutes);

export default router;
