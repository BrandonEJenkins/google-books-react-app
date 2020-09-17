const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BooksSavedSchema = new Schema({
    title: String,
    author: String,
    published: String
});

// Model
const BooksSaved = mongoose.model('BooksSaved', BooksSavedSchema);

module.exports = BooksSaved;