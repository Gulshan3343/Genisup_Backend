// const express = require('express');
// const router = express.Router();
// const FormdataController = require('../Controllers/formdataController');
// const authMiddleware = require('../Middlewares/auth');

// // Get all formdata (public)
// router.get('/', FormdataController.getformdata);

// // Create a new formdata (admin only)
// router.post('/', authMiddleware.verifyAdmin, FormdataController.createFormdata);

// // Update a formdata (admin only)
// router.put('/:id', authMiddleware.verifyAdmin, FormdataController.updateFormdata);

// // Delete a formdata (admin only)
// router.delete('/:id', authMiddleware.verifyAdmin, FormdataController.deleteFormdata);

// module.exports = router;






// models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: false },
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;





// const express = require('express');
// const { submitContactForm } = require('../Controllers/contactController');

// const router = express.Router();

// // POST route to handle contact form submission
// router.post('/', submitContactForm);

// module.exports = router;
