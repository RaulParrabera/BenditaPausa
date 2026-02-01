import React from "react";
import { FindUsWrapper, FindUsTitle, FindUsDesc, FindUsMap } from "../../styles/FindUsStyles.jsx";
import { Instagram } from "../Home/Instagram.jsx";

const FindUsPage = () => {
  return (
    <FindUsWrapper>
      <FindUsTitle>Visita nuestra tienda</FindUsTitle>
      <FindUsDesc>Todas tenemos un vínculo con la lana.</FindUsDesc>
      <FindUsDesc>
        Bienvenidos a "Bendita Pausa", una tienda cercana, con hilaturas con alma, del campo a tus agujas, cuidadas desde cero, para que cada puntada que des cuente una historia personal.
        <br/>
        Trabajamos con hilaturas naturales, mezclas nobles, muchas de ellas teñidas a mano y en pequeñas cantidades, para obtener procesos únicos.
        <br/>
        Escogemos marcas de productores nacionales e internacionales, siempre con la misma premisa, el amor, el cuidado y la trazabilidad.
        <br/>
        Una oferta variada en hilaturas para cada época del año.
        Somos un espacio para amantes de la calma, de tocar, de oler, de sentir, de tejer y con intención de despertar tus sentidos.
      </FindUsDesc> 

      <FindUsMap>
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7659817042636!2d-4.14807352373485!3d40.59092067141211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd410bdc3a996f81%3A0x4e55d1e12aec74c0!2sBendita%20pausa!5e0!3m2!1ses!2ses!4v1768923428546!5m2!1ses!2ses"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </FindUsMap>
    </FindUsWrapper>
  );
};

/*const FindUsPage = () => {
  return (
    <div>
      <section className="findus-block">
        <FindUs />
      </section>
      <section className="instagram-block">
        <Instagram />
      </section>
    </div>
  );
};*/

export { FindUsPage };