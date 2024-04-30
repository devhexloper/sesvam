import React from 'react'
import { Container, Row,} from 'react-bootstrap'
import Footer from '../components/Footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/ResizableContainer.css'

import Console from '../core/components/Console.jsx';
const MainContainer = () => {
  return (
    <Container fluid className="container-fluid bg-dark-primary min-vh-100">
      <Row>
        {/* <ResizableContainer
      
          resizeSide={false}
          minSize={100}
          maxSize={300}
        >
          <h1>ggggg</h1>
        </ResizableContainer>
      </Row>
      <Row>
        <ResizableContainer
      
          resizeSide={false}
          minSize={0}
          maxSize={400}
        >
          <h1>ggggg</h1>
        </ResizableContainer> */}
<Console></Console>
<Footer></Footer>
      </Row>

    </Container>
  )
}

export default MainContainer
