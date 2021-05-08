import React from 'react'
import '../styles/components/dimension.scss'

export default function Dimension(props) {
  const {
    width,
    setWidth,
    heigth,
    setHeigth,
    setStartedDrawing,
    startedDrawing
  } = props;

  return (
    <div id="dimension">
      <div className="content">
        <h2>Enter panel dimension</h2>
        <div className="data__input">
          <div className="width">
            <label htmlFor="width">Width</label>
            <input type="number" id="width" value={width} onChange={e => setWidth(e.target.value)} max={68} />
          </div>
          <div className="heigth">
            <label htmlFor="heigth">Heigth</label>
            <input type="number" id="heigth" value={heigth} onChange={e => setHeigth(e.target.value)} max={32} />
          </div>
        </div>
        <button
          onClick={() => {
            setStartedDrawing(!startedDrawing)
          }}
        >
          Start Drawing
        </button>
      </div>
    </div>
  );
}