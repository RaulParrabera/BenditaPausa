import React from "react";
import { FooterContainer, FooterContent, FooterSection, SocialIcons } from "./FooterStyles";
import { FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <FooterContainer id="contacto">
      <FooterContent>
        <FooterSection>
          <h4>Empresa</h4>
          <a href="/politica-privacidad">Política de privacidad</a>
          <a href="/terms">Términos y condiciones</a>
          <a href="/returns">Política de devoluciones</a>
        </FooterSection>

        <FooterSection>
          <h4>Contacto</h4>
          <p>benditapausatejeril@gmail.com</p>
          <p>+34 699 80 61 95</p>
        </FooterSection>

        <FooterSection>
          <h4>Síguenos</h4>
          <SocialIcons>
            <a href="https://www.instagram.com/benditapausa_/?hl=af" target="_blank" rel="noopener noreferrer"  aria-label="Instagram de Bendita Pausa"            > 
              <FaInstagram />
            </a>
          </SocialIcons>
        </FooterSection>

        <p>&copy; {new Date().getFullYear()} Bendita Pausa. Todos los derechos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export { Footer };