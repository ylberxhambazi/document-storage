// api/documents/documents.routes.js

import express from 'express';
import multer from 'multer';
import { createDocument, getDocuments, getDocumentById } from './documents.controller.js';
import authenticate from '../../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })

// Route to get all documents
router.get('/', authenticate, async (req, res) => {
    try {
        const documents = await getDocuments();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch documents' });
    }
});

// Route to create a new document
router.post('/', authenticate, async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const newDocument = await createDocument(title, content, userId);
        res.status(201).json(newDocument);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create document' });
    }
});

// Route to get document by ID
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    try {
        const document = await getDocumentById(id);
        res.json(document);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch document by ID' });
    }
});

export default router;
