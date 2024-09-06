// const mongoose = require('mongoose');

// const careerSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     job_type: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
//     salary: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Category',
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model('Career', careerSchema);



// contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/ContactRoutes'); // Make sure the model path is correct

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    // Save the contact entry to the database
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
});

module.exports = router;



// const mongoose = require('mongoose');

// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, match: /.+\@.+\..+/ }, // Basic email validation
//   phone: { type: String, required: false }, // Optional phone field
//   message: { type: String, required: true },
// }, { timestamps: true }); // Adds createdAt and updatedAt fields

// const Contact = mongoose.model('Contact', contactSchema);

// module.exports = Contact;
