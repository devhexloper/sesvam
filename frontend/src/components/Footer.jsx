import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <Container>
        <p className="text-center py-2">Desarrollado por Armando Fabián González</p>
      </Container>
    </footer>
  );
};

export default Footer;
