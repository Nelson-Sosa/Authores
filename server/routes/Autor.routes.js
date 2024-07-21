const AutorController = require('../controllers/Autor.controller');

module.exports = (app) => {
    app.get('/api/Autores', AutorController.todosLosAutores);
    app.post('/api/agregar/autor', AutorController.agregarAutor);
    app.get('/api/autor/:id', AutorController.getAutor);
    app.put('/api/autor/:id', AutorController.actualizarAutor);
    app.delete('/api/autor/:id', AutorController.eliminarAutor);

};
