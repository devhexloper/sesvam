import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputData from './InputData'
import MediaCtl from './MediaCtl'
const RigthPanel = () => {
  return (
    <Container className="py-2" id="rigth-panel">
      <h6 className="text-color-primary">Ajustes específicos</h6>
      <InputData></InputData>
      <MediaCtl></MediaCtl>
    </Container>
  )
}

export default RigthPanel
