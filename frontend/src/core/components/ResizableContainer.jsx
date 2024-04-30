import React, { useState, useRef, useEffect } from 'react'
import { onClickBorderH, onClickBorderD } from './../utils/handleClickBorder.js'
import './../../styles/ResizableContainer.css'

const ResizableContainer = (props) => {
  const { children, resizeSide = false, minSize = 100, maxSize = 500 } = props
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [containerSize, setContainerSize] = useState('fit-content')
  const [containerSizeAux, setContainerSizeAux] = useState(0)
  const borderWidth = 5
  const elementRef = useRef(null)
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      if (isDragging) {
        const delta = resizeSide ? e.pageX - startX : e.pageY - startY
        let newSize = parseInt(containerSizeAux) + delta
        newSize = Math.min(Math.max(minSize, newSize), maxSize)
        setContainerSize(`${newSize}px`)
      }
    }
    const handleOnMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', handleOnMouseMove)
      document.removeEventListener('mouseup', handleOnMouseUp)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleOnMouseMove)
      document.addEventListener('mouseup', handleOnMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleOnMouseMove)
      document.removeEventListener('mouseup', handleOnMouseUp)
    }
  }, [isDragging, containerSize, startX, startY, containerSizeAux, resizeSide, minSize, maxSize])
  const handleOnMouseDown = (e) => {
    const element = elementRef.current
    let borderSide = false
    if (!element) return
    if (e.button === 0) {
      borderSide = resizeSide
        ? onClickBorderH(e, element.getBoundingClientRect(), borderWidth)
        : onClickBorderD(e, element.getBoundingClientRect(), borderWidth)
      if (borderSide) {
        console.info('click border')
        setIsDragging(true)
        resizeSide ? setStartX(e.pageX) : setStartY(e.pageY)
        resizeSide
          ? setContainerSizeAux(element.clientWidth)
          : setContainerSizeAux(element.clientHeight)
      } 
    }
  }
  return (
    <>
      {resizeSide ? (
        <div
          className="resizable-container resizable-cursor-h"
          style={{ width: containerSize }}
          ref={elementRef}
          onMouseDown={handleOnMouseDown}
        >
          {children}
        </div>
      ) : (
        <div
          className="resizable-container resizable-cursor-v"
          style={{ [resizeSide ? 'width' : 'height']: containerSize }}
          ref={elementRef}
          onMouseDown={handleOnMouseDown}
        >
          {children}
        </div>
      )}
    </>
  )
}
export default ResizableContainer
