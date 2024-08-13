const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    job_type: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    company:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    positions:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Career', careerSchema);