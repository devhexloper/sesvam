import React, { useState } from 'react'
import { ResizableBox } from 'react-resizable'

import { Nav, Tab, Row } from 'react-bootstrap'
import '../../styles/ResizableContainer.css'
import '../../styles/local-style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ConsolePanel = () => {
  const [activeTab, setActiveTab] = useState('consola')
  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <ResizableBox className="resizable-container" width={600} height={300} axis="both">
      <Tab.Container defaultActiveKey={'consola'} fill={true} justify>
        <Row className=''>
          <Nav variant="underline" className='text-color-primary'>
            <Nav.Item>
              <Nav.Link eventKey={'consola'}>CONSOLA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={'codigo'}>CÓDIGO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={'descripcion'}>DESCRIPCIÓN</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        <Tab.Content>
          <Tab.Pane eventKey={'consola'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus odit commodi
            exercitationem facere. Quaerat deleniti dolores aspernatur voluptate? Perspiciatis
            temporibus illo velit numquam exercitationem accusantium officiis commodi ut ratione!
          </Tab.Pane>
          <Tab.Pane eventKey={'codigo'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore culpa asperiores
            ratione corrupti amet quos labore sequi. Et odio voluptas alias veniam aperiam. Vitae
            earum sint dignissimos omnis ullam.
          </Tab.Pane>
          <Tab.Pane eventKey={'descripcion'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis atque qui minus
            delectus quaerat quia est aliquid, velit perspiciatis quis iusto mollitia possimus ab!
            Blanditiis quasi magnam possimus perferendis!
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </ResizableBox>
  )
}
export default ConsolePanel
