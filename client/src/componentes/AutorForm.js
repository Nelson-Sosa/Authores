import React, { useState } from 'react';
import axios from 'axios';
import { Paper, FormControl, InputLabel, OutlinedInput, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../componentes/AutorList.css';

const AutorForm = () => {
    const [Nombre, setNombre] = useState(""); 
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');     

    const onSubmitHandler = e => {
        e.preventDefault();
        if (Nombre.length < 3) {
            setError("El nombre del autor debe tener al menos 3 caracteres.");
            return;  
        }

        axios.post('http://localhost:8000/api/agregar/autor', { Nombre })
            .then(res =>{
                setMensaje("¡Autor agregado correctamente!");
                setError('');
                console.log(res);
            })
            .catch(err =>{
                setError("Hubo un error al agregar el autor.");
                setMensaje('');
                console.log(err);
            });
    };

    const styles = {
        paper: { width: "20rem", padding: "1rem", height: "10rem" },
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
            <p>Add a new author:</p>
            <Link to="/" rel="noopener noreferrer">Home</Link>
            <Paper elevation={5} style={styles.paper}>
                <form onSubmit={onSubmitHandler}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Name</InputLabel>
                        <OutlinedInput
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                            value={Nombre}
                        />
                    </FormControl>
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
            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};

export default AutorForm;

