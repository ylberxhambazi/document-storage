import express from 'express';
import { login } from './auth.controller.js';

const router = express.Router();

// POST /api/auth/login
router.post('/login', login);

export default router;
