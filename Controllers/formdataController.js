const FormData = require('../models/Formdata');


exports.processFormData = async (req, res) => {
    const { name, email, message } = req.body;


    try {
        // Create a new form data entry
        const formData = new FormData({
            name,
            email,
            message
        });

        // Save the form data to the database

        const savedFormData = await formData.save();
        res.status(201).json({ message: 'Form submitted successfully', data: savedFormData });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getFormData = async (req, res) => {
    try {
        const formData = await FormData.find();
        res.json(formData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a formdata
exports.deleteFormdata = async (req, res) => {
    try {
        const formdata = await Formdata.findById(req.params.id);
        if (formdata) {
            await formdata.remove();
            res.json({ message: 'Formdata deleted' });
        } else {
            res.status(404).json({ message: 'Formdata not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a formdata
exports.updateFormdata = async (req, res) => {
    try {
        const formdata = await Formdata.findById(req.params.id);
        if (formdata) {
            formdata.title = req.body.title || formdata.title;
            formdata.content = req.body.content || formdata.content;
            formdata.author = req.body.author || formdata.author;
            formdata.category = req.body.category || formdata.category;
            formdata.image = req.body.image || formdata.image;
            const updatedFormdata = await formdata.save();
            res.json(updatedFormdata);
        } else {
            res.status(404).json({ message: 'Formdata not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};