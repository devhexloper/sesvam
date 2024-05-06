import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const MediaCtl = () => {
  return (
    <Container className='my-5'>
      <Row>
        <Col>
          <Form.Check className="text-color-secondary" type="checkbox" label="Costo" />
        </Col>
        <Col>
          <Form.Check className="text-color-secondary" type="checkbox" label="Max" />
        </Col>
        <Col>
          <Form.Check className="text-color-secondary" type="checkbox" label="Min" />
        </Col>
      </Row>
      <Row>
     
          <Skeleton height={200}></Skeleton>
    
      </Row>
    </Container>
  )
}

export default MediaCtl
