const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/librosDB');

const libroSchema = mongoose.Schema({
    titulo: String,
    autor: String
}, {collection: 'libros'});

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;