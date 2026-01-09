import React from "react";
import { AboutUsSection, BoxesContainer, Box } from "../../styles/AboutUsStyles.jsx";

const aboutLinks = [
  { title: "NOSOTROS", image: "/About.png", link: "/nosotros" },
  { title: "COMUNIDAD", image: "/Community.png", link: "/comunidad" },
  { title: "TALLERES", image: "/Workshops.png", link: "/talleres" },
];

const AboutUs = () => {
  return (
    <AboutUsSection>
      <h2>Conócenos</h2>
      <h3>
        Soy <strong>Gisela</strong>. La cara visible de Bendita Pausa.
        <br/>
        Desde siempre me ha gustado crear, tejer. Soy autodidacta, aprendí a tejer con tan solo 5 o 6 añitos, estuve siempre rodeada de lanas, viendo a mi madre tejer y a mi abuela por supuesto!!
        <br/>
        Pero sobre todo aprendí de mi madre, quien se ganaba la vida con ello y a quien le debo todo mi aprendizaje y curiosidad.
        <br/>
        Tejer para mi es una forma de conectar con mi interior, una terapia, una de respetar mis ritmos de vida y bajar revoluciones, de habitarme.
        <br/>
        "Soy de las que madeja en mano crea desde cero"
        <br/>
        Conocemos personalmente a ganaderos, rebaños, lavaderos e hilanderos, y colaboramos mano a mano con ellos desde hace años para ofrecerte un producto de calidad: lana genuina.
      </h3>


      <BoxesContainer>
        {aboutLinks.map((item) => (
          <Box as="a" href={item.link} key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="overlay"></div>
            <p>{item.title}</p>
          </Box>
        ))}
      </BoxesContainer>

    </AboutUsSection>
  );
};

export { AboutUs };
