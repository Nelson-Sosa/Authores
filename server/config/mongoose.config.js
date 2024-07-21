const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establecí una conexión con la base de datos."))
    .catch(err => console.log("Algo salió mal al conectarse a la base de datos.", err));
