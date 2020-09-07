import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  // definir State
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const obtenerInformacion = (e) => {
    setError(false);
    setTermino(e.target.value);
  };

  const buscarImagenes = (e) => {
    e.preventDefault();

    // Validar
    if (termino.trim() === "") {
      setError(true);
      return;
    }

    // Enviar busqueda al componente principal
    setBusqueda(termino);
  };
  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar una imagen"
            onChange={obtenerInformacion}
          />
        </div>

        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>

      {error ? <Error mensaje="Agrega un termino de busqueda" /> : null}
    </form>
  );
};

Formulario.propTypes = {
  setBusqueda: PropTypes.func.isRequired,
};

export default Formulario;
