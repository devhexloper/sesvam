import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';

import '../../styles/ResizableContainer.css';
import '../../styles/local-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Console = () => {
  const [tab, setTab] = useState('consola');

  const handleTabClick = (newTab) => {
    setTab(newTab);
  };
  const widthPanel = window.innerWidth - 300
  const heightPanel = window.innerHeight
  return (
    <>
      <ResizableBox className="resizable-container" width={widthPanel} height={300} axis="both">
        <div className="tab-container">
          <div className="tab-items">
            <div className={`tab-links ${tab === 'consola' ? 'tab-active' : ''}`} onClick={() => handleTabClick('consola')}>CONSOLA</div>
            <div className={`tab-links ${tab === 'codigo' ? 'tab-active' : ''}`} onClick={() => handleTabClick('codigo')}>CÓDIGO</div>
            <div className={`tab-links ${tab === 'descripcion' ? 'tab-active' : ''}`} onClick={() => handleTabClick('descripcion')}>DESCRIPCIÓN</div>
          </div>
          <div className="tab-content">
            <div id="tab-consola" className={`${tab === 'consola' ? 'tab-pane-active' : 'tab-pane'}`}>
              <p>
                Contenido de la consola
              </p>
            </div>
            <div id="tab-codigo" className={`${tab === 'codigo' ? 'tab-pane-active' : 'tab-pane'}`}>
              <p>
                Contenido del código
              </p>
            </div>
            <div id="tab-descripcion" className={`${tab === 'descripcion' ? 'tab-pane-active' : 'tab-pane'}`}>
              <p>
                Contenido de la descripción
              </p>
            </div>
          </div>
        </div>
      </ResizableBox>
    </>
  );
};

export default Console;
