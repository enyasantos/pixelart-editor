import React, { useState } from 'react'
import '../styles/components/pixel.scss'

export default function Pixel(props) {
  const { colorSelected } = props;
  const [color, setColor] = useState();

  function handleChangeColor(e) {
    e.preventDefault();
    setColor(colorSelected);
  }

  return (
    <div id="pixel" onClick={handleChangeColor} style={{ background: color }}></div>
  );
}