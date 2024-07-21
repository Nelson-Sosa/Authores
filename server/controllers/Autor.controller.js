const Autor = require('../models/Autor.model');


module.exports.todosLosAutores = (req, res) => {
    Autor.find()
        .then((autores) => res.status(200).json(autores))
        .catch((error) => res.status(500).json({ mensaje: 'Algo salió mal', error }));
};


module.exports.getAutor = (request, response) => {
    Autor.findOne({ _id: request.params.id })
        .then(autor => {
            if (!autor) {
                return response.status(404).json({ mensaje: 'Autor no encontrado' });
            }
            response.json(autor);
        })
        .catch(err => response.status(500).json({ mensaje: 'Error al buscar el autor', err }));
}


module.exports.agregarAutor = (req, res) => {
    Autor.create(req.body)
        .then((autorConId) => res.status(201).json(autorConId))
        .catch((error) => res.status(400).json({ mensaje: 'Error al agregar el autor', error }));
};


module.exports.actualizarAutor = (request, response) => {
    Autor.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(actualizarAutor => {
            if (!actualizarAutor) {
                return response.status(404).json({ mensaje: 'Autor no encontrado' });
            }
            response.json(actualizarAutor);
        })
        .catch(err => response.status(400).json({ mensaje: 'Error al actualizar el autor', err }));
}


module.exports.eliminarAutor = (request, response) => {
    Autor.deleteOne({ _id: request.params.id })
        .then(eliminarConfirmar => {
            if (eliminarConfirmar.deletedCount === 0) {
                return response.status(404).json({ mensaje: 'Autor no encontrado' });
            }
            response.json({ mensaje: 'Autor eliminado exitosamente' });
        })
        .catch(err => response.status(500).json({ mensaje: 'Error al eliminar el autor', err }));
};
