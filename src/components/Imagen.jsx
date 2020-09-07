import React from "react";
import PropTypes from "prop-types";

const Imagen = ({ imagen }) => {
  // Estraer las variables
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
      </div>
    </div>
  );
};

Imagen.propTypes = {
  imagen: PropTypes.object.isRequired,
};

export default Imagen;
