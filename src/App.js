import React, { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";

function App() {
  // State de la app
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
      const resultado = await axios.get(url);
      setImagenes(resultado.data.hits);
    };
    consultarAPI();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>

        <Formulario setBusqueda={setBusqueda} />
      </div>
    </div>
  );
}

export default App;
