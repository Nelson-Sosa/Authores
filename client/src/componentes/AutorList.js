import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../componentes/AutorList.css';

const AutorList = ({ autores, removeFromDom }) => {
    const eliminarAutor = (autorId) => {
        axios.delete('http://localhost:8000/api/autor/' + autorId)
            .then(res => {
                removeFromDom(autorId);
            })
            .catch(error => console.error('Error al eliminar autor:', error));
    };

    return (
        <div>
            <h2>Favorite authors</h2>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions avalible</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor, idx) => (
                        <tr key={idx}>
                            <td>{autor.Nombre}</td>
                            <td>
                                <button className="btnEliminar" onClick={() => eliminarAutor(autor._id)}>
                                    Eliminar
                                </button>
                                <button className="btnEditar">
                                    <Link to={`/autor/${autor._id}/edit`} style={{ color: 'white', textDecoration: 'none' }}>
                                        Editar
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AutorList;
