import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Paper, FormControl, InputLabel, OutlinedInput, Button } from '@mui/material';

const ActualizarAutor = () => {
    const { id } = useParams();
    const [Nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/autor/${id}`)
            .then(res => setNombre(res.data.Nombre))
            .catch(err => console.log(err));
    }, [id]);

    const actualizarAutor = e => {
        e.preventDefault();
        if (Nombre.length < 3) {
            setError("El nombre del autor debe tener al menos 3 caracteres.");
            return;
        }
        axios.put(`http://localhost:8000/api/autor/${id}`, { Nombre })
            .then(res => {
                setMensaje("¡Autor actualizado correctamente!");
                setError('');
                console.log(res);
            })
            .catch(err => {
                setError("Hubo un error al actualizar el autor.");
                setMensaje('');
                console.log(err);
            });
    };

    const styles = {
        paper: { width: "20rem", padding: "2rem", height: "13rem" },
        input: { marginBottom: "2rem" },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
        },
        button: { width: "45%" }
    };

    return (
        <>
            <h2>Favorite authors</h2>
            <p>Edit this author</p>
            <Link to="/">Home</Link>
            <Paper elevation={5} style={styles.paper}>
                <form onSubmit={actualizarAutor}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Name</InputLabel>
                        <OutlinedInput
                            type="text"
                            name="Nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={Nombre}
                        />
                    </FormControl>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
                    <div style={styles.buttonContainer}>
                        <Button component={Link} to="/" variant="contained" color="primary" style={styles.button}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary" style={styles.button}>
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
        </>
    );
};

export default ActualizarAutor;
