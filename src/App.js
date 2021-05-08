import React, { useState, useRef } from 'react'
import Dimension from './components/Dimension'
import Editor from './components/Editor'
import Header from './components/Header'
import './styles/global.scss'

export default function App() {
  const panelRef = useRef();

  const [width, setWidth] = useState(24);
  const [heigth, setHeigth] = useState(24);
  const [startedDrawing, setStartedDrawing] = useState(false);
  const [colorSelected, setColorSelected] = useState("#CB4335");

  return (
    <div className="App">
      <Header
        startedDrawing={startedDrawing}
        setStartedDrawing={setStartedDrawing}
        panelRef={panelRef}
        setWidth={setWidth}
        setHeigth={setHeigth}
      />
      {!startedDrawing &&
        <Dimension
          width={width}
          setWidth={setWidth}
          heigth={heigth}
          setHeigth={setHeigth}
          startedDrawing={startedDrawing}
          setStartedDrawing={setStartedDrawing}
        />}
      {startedDrawing &&
        <Editor
          width={width}
          heigth={heigth}
          colorSelected={colorSelected}
          setColorSelected={setColorSelected}
          panelRef={panelRef}
        />
      }
    </div>
  );
}
