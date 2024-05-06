import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer.jsx'
import { ResizableBox } from 'react-resizable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/ResizableContainer.css'
import RigthPanel from '../core/components/RigthPanel.jsx'
import Console from '../core/components/Console.jsx'

const widthPanel = window.innerWidth - 300
const heightPanel = window.innerHeight

const MainContainer = () => {
  return (
    <Container fluid className="container-fluid bg-dark-primary min-vh-100">
      <Row>
        <Col>
          <Row>
            <ResizableBox
              className="resizable-container"
              width={widthPanel}
              height={400}
              axis="both"
            >
              <div>Canvas</div>
            </ResizableBox>
          </Row>
          <Row>
            <Console></Console>
          </Row>
        </Col>
        <Col>
          
            <RigthPanel></RigthPanel>
          
          <Row>
            
          </Row>
        </Col>
        <Row>
          <Footer></Footer>
        </Row>
      </Row>
    </Container>
  )
}

export default MainContainer
