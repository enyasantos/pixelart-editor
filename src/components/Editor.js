import React from 'react'
import '../styles/components/editor.scss'
import Row from "./Row";
import Sidebar from "./Sidebar";

export default function Editor(props) {

  const { width, heigth, colorSelected, setColorSelected, panelRef } = props;

  let rows = []

  for (let i = 0; i < heigth; i++) {
    rows.push(<Row key={i} width={width} colorSelected={colorSelected} />)
  }

  return (
    <div className="editor__container">
      <Sidebar colorSelected={colorSelected} setColorSelected={setColorSelected} />
      <div id="editor" ref={panelRef} >{rows}</div>
    </div>
  );
}