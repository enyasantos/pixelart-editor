import React from 'react'
import '../styles/components/row.scss'
import Pixel from "./Pixel";

export default function Row(props) {

  const { width, colorSelected } = props;

  let pixels = []

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} colorSelected={colorSelected} />)
  }

  return (
    <div id="row">{pixels}</div>
  );
}