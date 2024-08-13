const Career = require('../models/Careers');

// Get all Career
exports.getcareers = async (req, res) => {
    try {
        const careers = await Career.find().populate('category');
        res.json(careers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new career
exports.createCareer = async (req, res) => {
    const career = new Career({
        title: req.body.title,
        job_type: req.body.job_type,
        image: req.body.image,
        salary: req.body.salary,
        category: req.body.category,
    });

    try {
        const newCareer = await career.save();
        res.status(201).json(newCareer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a career
exports.deleteCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (career) {
            await career.remove();
            res.json({ message: 'Career deleted' });
        } else {
            res.status(404).json({ message: 'Career not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a career
exports.updateCareer = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (career) {
            career.title = req.body.title || career.title;
            career.content = req.body.content || career.content;
            career.author = req.body.author || career.author;
            career.category = req.body.category || career.category;
            career.image = req.body.image || career.image;
            const updatedCareer = await career.save();
            res.json(updatedCareer);
        } else {
            res.status(404).json({ message: 'Career not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get Career by Id
exports.getCareerById = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id).populate('category');
        if (career) {
            res.json(career);
        } else {
            res.status(404).json({ message: 'Career not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};