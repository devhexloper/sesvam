import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const InputData = () => {
  return (
    <>
      <Container>
        <Row className='my-3'>
          <Form.Select className="my-1">
            <option>Seleccionar Algoritmo</option>
            <option value="1">Recocido Simulado</option>
            <option value="2">Colonia de Hormigas</option>
            <option value="3">Búsqueda Tabú</option>
            <option value="4">Algoritmos Genéticos</option>
          </Form.Select>
          <Form.Select className="my-1">
            <option>Seleccionar Desafío</option>
            <option value="1">########</option>
            <option value="2">########</option>
            <option value="3">########</option>
          </Form.Select>
        </Row>
        <Row className='my-3'>
      
            <Skeleton count={4}></Skeleton>
         
        </Row>
      </Container>
    </>
  )
}

export default InputData
