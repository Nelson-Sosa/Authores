import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import ActualizarAutor from  './views/ActualizarAutor';
import AutorForm from './componentes/AutorForm';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/new" element={<AutorForm />} />
        <Route exact path="/autor/:id/edit" element={<ActualizarAutor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
