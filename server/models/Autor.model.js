const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"]
    }
}, { timestamps: true });

const Autor = mongoose.model('Autor', AutorSchema);

module.exports = Autor;
