const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/blogController');
const authMiddleware = require('../Middlewares/auth');

// Get all blogs (public)
router.get('/', BlogController.getBlogs);

// Create a new blog (admin only)
router.post('/', authMiddleware.verifyAdmin, BlogController.createBlog);

// Update a blog (admin only)
router.put('/:id', authMiddleware.verifyAdmin, BlogController.updateBlog);

// Delete a blog (admin only)
router.delete('/:id', authMiddleware.verifyAdmin, BlogController.deleteBlog);

// Get a single blog by ID (public)
router.get('/:id', BlogController.getBlogById);

module.exports = router;
