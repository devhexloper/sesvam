import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResizableContainer from './../core/components/ResizableContainer.jsx'

const MainContainer = () => {
  return (
    <Container fluid>
      <Row>
        <ResizableContainer resizeSide={true} minSize={100} maxSize={700}>
          <h1>resizable</h1>
        </ResizableContainer>
      </Row>
    </Container>
  )
}

export default MainContainer
