const express = require('express');
const router = express.Router();
const FormdataController = require('../Controllers/formdataController');
const authMiddleware = require('../Middlewares/auth');

// Get all formdata (public)
router.get('/', FormdataController.getformdata);

// Create a new formdata (admin only)
router.post('/', authMiddleware.verifyAdmin, FormdataController.createFormdata);

// Update a formdata (admin only)
router.put('/:id', authMiddleware.verifyAdmin, FormdataController.updateFormdata);

// Delete a formdata (admin only)
router.delete('/:id', authMiddleware.verifyAdmin, FormdataController.deleteFormdata);

module.exports = router;
