import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const RigthPanel = () => {
  return (
    <Container className='py-2' id="rigth-panel">
      <Row className='my-6' id="rigth-panel-select-input">
        <h6 className='text-color-primary my-3'>
           Ajustes Específicos
        </h6>
        <Form.Select className='my-1'>
            <option>Seleccionar Algoritmo</option>
          <option value="1">Recocido Simulado</option>
          <option value="2">Colonia de Hormigas</option>
          <option value="3">Búsqueda Tabú</option>
          <option value="4">Algoritmos Genéticos</option>
        </Form.Select>
        <Form.Select className='my-1'>
            <option>Seleccionar Desafío</option>
          <option value="1">########</option>
          <option value="2">########</option>
          <option value="3">########</option>
        </Form.Select>
      </Row>
      <Row id="rigth-panel-input-data"></Row>
      <Row id="rigth-panel-ctl-media"></Row>
      <Row id="rigth-panel-data-view"></Row>
    </Container>
  )
}

export default RigthPanel
