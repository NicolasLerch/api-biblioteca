const express = require('express');
const router = express.Router();

const Libro = require('../models/libro');

//OBTENER TODOS LOS LIBROS
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error){
        res.status(500).json({error: 'Error al obtener libros'})
    }
});

//OBTENER LIBRO POR ID
router.get('/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id, req.body);
        res.json(libro);
    } catch (error) {
        res.status(500).json({error: 'Libro no encontrado.'});
    }
});

//AGREGAR NUEVO LIBRO
router.post('/nuevo', async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch (error) {
        res.status(500).json({error: 'Error al crear nuevo libro.'});
    }
});


//MODIFICAR LIBRO
router.put('/:id', async (req, res) => {
    try {
        const libroAModificar = await Libro.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(libroAModificar);
    } catch (error){
        res.status(500).json({error: 'No se encuentra el libro indicado.'});
    }
});

//ELIMINAR LIBRO
router.delete('/:id', async (req, res) => {
    try {
        const libroAEliminar = await Libro.findByIdAndDelete(req.params.id);
        res.json(libroAEliminar);
    } catch(error){
        res.status(500).json({error: "Libro no encontrado."});
    }
})

module.exports = router;