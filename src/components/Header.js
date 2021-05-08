import React, { useState } from 'react'
import '../styles/components/header.scss'
import { exportComponentAsPNG } from 'react-component-export-image'

export default function Header(props) {
  const { startedDrawing, setStartedDrawing, setHeigth, setWidth, panelRef } = props;
  const [nameArt, setNameArt] = useState("New PixelArt*");

  function handleReset() {
    setHeigth(24);
    setWidth(24);
    setStartedDrawing(false);
  }

  function handleExport() {
    exportComponentAsPNG(panelRef, { fileName: nameArt });
  }

  return (
    <header id="header" style={{ justifyContent: startedDrawing ? 'space-between' : 'center' }}>
      <h1>PixelArt</h1>
      {startedDrawing && (
        <>
          <input
            type="text"
            value={nameArt}
            onChange={e => setNameArt(e.target.value)}
          />
          <div>
            <button onClick={handleExport}>Export as png</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </>
      )}
    </header>
  );
}