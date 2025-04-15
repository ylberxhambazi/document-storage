// api/users/users.routes.js

import express from 'express';
import { createUser, getUsers, getUserById } from './users.controller.js';
import authenticate from '../../middleware/authMiddleware.js';

const router = express.Router();

// Route to get all users
router.get('/', authenticate, async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Route to create a new user
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await createUser(name, email, password);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Route to get user by ID
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user by ID' });
    }
});

export default router;
