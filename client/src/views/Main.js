import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AutorForm from '../componentes/AutorForm';
import AutorList from '../componentes/AutorList';
import { Link } from 'react-router-dom';
const Main = () => {
    const [autores, setAutores] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/autores')
            .then(res => {
                setAutores(res.data);
                setLoaded(true);
            })
            .catch(error => console.error('Error al recuperar Autores:', error));
    }, []);

    const removeFromDom = AutorId => {
        setAutores(autores.filter(autor => autor._id !== AutorId));
    };

    return (
        <div>
            <Link to= "/new">Agregar Autor</Link>
            <hr />
            {loaded && <AutorList autores={autores} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;
