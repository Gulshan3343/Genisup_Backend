// const FormData = require('../models/Formdata');


// exports.processFormData = async (req, res) => {
//     const { name, email, message } = req.body;


//     try {
//         // Create a new form data entry
//         const formData = new FormData({
//             name,
//             email,
//             message
//         });

//         // Save the form data to the database

//         const savedFormData = await formData.save();
//         res.status(201).json({ message: 'Form submitted successfully', data: savedFormData });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


// exports.getFormData = async (req, res) => {
//     try {
//         const formData = await FormData.find();
//         res.json(formData);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Delete a formdata
// exports.deleteFormdata = async (req, res) => {
//     try {
//         const formdata = await Formdata.findById(req.params.id);
//         if (formdata) {
//             await formdata.remove();
//             res.json({ message: 'Formdata deleted' });
//         } else {
//             res.status(404).json({ message: 'Formdata not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Update a formdata
// exports.updateFormdata = async (req, res) => {
//     try {
//         const formdata = await Formdata.findById(req.params.id);
//         if (formdata) {
//             formdata.title = req.body.title || formdata.title;
//             formdata.content = req.body.content || formdata.content;
//             formdata.author = req.body.author || formdata.author;
//             formdata.category = req.body.category || formdata.category;
//             formdata.image = req.body.image || formdata.image;
//             const updatedFormdata = await formdata.save();
//             res.json(updatedFormdata);
//         } else {
//             res.status(404).json({ message: 'Formdata not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };




const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Handle form submission
const submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create a new contact entry
  const newContact = new Contact({
    name,
    email,
    company,
    // workWithUs,
    // phone,
    message,
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Email address to receive the contact form messages
    subject: 'New Contact Us Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    // Save the contact entry to the database
    await newContact.save();

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message. Please try again.');
  }
};

module.exports = { submitContactForm };





// const Contact = require('../models/Contact');
// const nodemailer = require('nodemailer');
// require('dotenv').config(); // Load environment variables

// // Nodemailer transporter setup with environment variables
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER, // Your email address from environment variables
//     pass: process.env.EMAIL_PASS, // Your email password or app-specific password from environment variables
//   },
// });

// // Function to handle contact form submission
// const submitContactForm = async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   // Validate that all required fields are filled
//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'Please fill in all required fields (name, email, message).' });
//   }

//   try {
//     // Save contact details to the database
//     const newContact = new Contact({ name, email, phone, message });
//     await newContact.save();

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Sender email address
//       to: process.env.RECEIVER_EMAIL, // Receiver email address (admin or team)
//       subject: 'New Contact Us Form Submission',
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone || 'N/A'}
//         Message: ${message}
//       `,
//     };

//     // Send email notification
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: 'Message sent successfully!' });
//   } catch (error) {
//     console.error('Error sending message:', error);
//     res.status(500).json({ message: 'Error sending message. Please try again.' });
//   }
// };

// module.exports = { submitContactForm };

