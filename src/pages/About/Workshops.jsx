import React from "react";
import { WorkshopsWrapper } from "../../styles/Workshops.jsx";


const Workshops = () => {
  return (
    <WorkshopsWrapper>
      <h1>Nuestros Talleres</h1>
      <p>
        En Bendita Pausa creemos que aprender y compartir es tan importante como crear.
        Descubre nuestros donde aprenderás a tejer, hilar, teñir y transformar la lana con tus propias manos. Comparte momentos, descubre técnicas tradicionales y despierta tu creatividad en compañía.
      </p>

      <div className="workshop-list">
        <div className="workshop">
          <h3>Iniciación al Hilado</h3>
          <p>Aprende a hilar lana con técnicas tradicionales y modernas.</p>
        </div>
        <div className="workshop">
          <h3>Teñido Natural</h3>
          <p>Explora el teñido con tintes naturales para obtener colores únicos.</p>
        </div>
        <div className="workshop">
          <h3>Técnicas de Tejido</h3>
          <p>Perfecciona tu técnica de punto o ganchillo o aprende a tejer desde cero.</p>
        </div>
        <div className="workshop">
          <h3>Talleres de costura</h3>
          <p>Aprende a hilar lana con técnicas tradicionales y modernas.</p>
        </div>
        <div className="workshop">
          <h3>Talleres de bordado</h3>
          <p>Aprende a hilar lana con técnicas tradicionales y modernas.</p>
        </div>
        <div className="workshop">
          <h3>Taller de afieltrado</h3>
          <p>Aprende a hilar lana con técnicas tradicionales y modernas.</p>
        </div>
      </div>
    </WorkshopsWrapper>
  );
};

export { Workshops };
