import React from 'react'

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import './../styles/local-style.css';
const Canvacontainer = () => {
  return (
    <Container className="container-fluid min-vh-100 bg-dark-primary border-color-primary">
      <Row>
        <h1>Hola</h1>
      </Row>
    </Container>
  )
}

export default Canvacontainer
