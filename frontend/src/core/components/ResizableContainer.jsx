import React, { useState, useRef, useEffect } from "react";
import { onClickBorderH, onClickBorderD } from "./../utils/handleClickBorder.js";
import "./../../styles/ResizableContainer.css";

const ResizableContainer = (props) => {
  const { children, resizeSide = true, minSize = 100, maxSize = 500 } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [containerWidth, setContainerWidth] = useState("fit-content");
  const [containerWidthAux, setContainerWidthAux] = useState(0);
  const borderWidth = 5;
  const elementRef = useRef(null);
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      if (isDragging) {
        const delta = resizeSide ? e.pageX - startX : e.pageY - startY;
        let newSize = parseInt(containerWidthAux) + delta;
        newSize = Math.min(Math.max(minSize, newSize), maxSize);
        setContainerWidth(`${newSize}px`);
      }
    };
    const handleOnMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleOnMouseMove);
      document.addEventListener("mouseup", handleOnMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [
    isDragging,
    containerWidth,
    startX,
    startY,
    containerWidthAux,
    resizeSide,
    minSize,
    maxSize,
  ]);
  const handleOnMouseDown = (e) => {
    const element = elementRef.current;
    let borderSide = false;
    if (!element) return;
    if (e.button === 0) {
      borderSide = resizeSide
        ? onClickBorderH(e, element.getBoundingClientRect(), borderWidth)
        : onClickBorderD(e, element.getBoundingClientRect(), borderWidth);
      if (borderSide) {
        console.info("click");
        setIsDragging(true);
        resizeSide ? setStartX(e.pageX) : setStartY(e.pageY);
        setContainerWidthAux(element.clientWidth);
      }
    }
  };
  return (
    <>
      {resizeSide ? (
        <div
          className="resizable-container resizable-cursor-h"
          style={{ width: containerWidth }}
          ref={elementRef}
          onMouseDown={handleOnMouseDown}
        >
          {children}
        </div>
      ) : (
        <div
          className="resizable-container resizable-cursor-v"
          style={{ width: containerWidth }}
          ref={elementRef}
          onMouseDown={handleOnMouseDown}
        >
          {children}
        </div>
      )}
    </>
  );
};
export default ResizableContainer;
