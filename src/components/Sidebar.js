import React, { useState } from 'react'
import '../styles/components/sidebar.scss'
import { SketchPicker } from 'react-color'

import EraserIcon from '../assets/eraser.svg';
import PencilIcon from '../assets/pencil.svg';

export default function Sidebar(props) {
  const { colorSelected, setColorSelected } = props;

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [lastColor, setLastColor] = useState(colorSelected);
  const [eraserSelected, setEraserSelected] = useState(false);
  const [penSelected, setPenSelected] = useState(true);

  function handleClickPicker(e) {
    if (eraserSelected) {
      setEraserSelected(false);
      setColorSelected(lastColor);
      setPenSelected(true);
    }
    setDisplayColorPicker(!displayColorPicker);
  }

  function handleEraser(e) {
    setPenSelected(false);
    setEraserSelected(true);
    setLastColor(colorSelected);
    setColorSelected('#FFFDFD');
  }

  function handlPen(e) {
    setPenSelected(true);
    setEraserSelected(false);
    setColorSelected(lastColor);
  }

  function changeColor(color) {
    setColorSelected(color.hex);
  }

  function handleClose() {
    setDisplayColorPicker(false);
  }

  return (
    <>
      <div id="sidebar">
        <button className={`pen ${penSelected ? 'active' : ''}`} onClick={handlPen}>
          <img src={PencilIcon} alt="Pen" />
        </button>
        <button className={`eraser ${eraserSelected ? 'active' : ''}`} onClick={handleEraser}>
          <img src={EraserIcon} alt="Eraser" fill="" />
        </button>
        <div>
          <div className="swatch" onClick={handleClickPicker} >
            <div className="color" style={{ background: eraserSelected ? lastColor : colorSelected }} />
          </div>
          {displayColorPicker && (
            <div className="popover">
              <div className="cover" onClick={handleClose} />
              <SketchPicker color={eraserSelected ? lastColor : colorSelected} onChangeComplete={changeColor} />
            </div>
          )}
        </div>
      </div>

    </>
  );
}