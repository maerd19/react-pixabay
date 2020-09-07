import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  // definir State
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    // Validar
    if (termino.trim() === "") {
      setError(true);
      return;
    }

    // Enviar busqueda al componente principal
  };
  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar una imagen"
            onChange={(e) => setTermino(e.target.value)}
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

export default Formulario;
