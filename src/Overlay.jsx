import React from 'react'
import './Overlay.css'

const FRAME1_TOP = 230
const FRAME_HEIGHT = 600
const GAP = 40
const FRAME2_TOP = FRAME1_TOP + FRAME_HEIGHT + GAP
const BORDER_RADIUS = 64

export default function Overlay() {
  return (
    <div className="overlay">
      <div className="overlay__bg-dots" aria-hidden />
      {/* Premier cadre vert : 230px du top, 600px de hauteur */}
      <div
        className="overlay__frame"
        style={{
          top: FRAME1_TOP,
          height: FRAME_HEIGHT,
          borderRadius: BORDER_RADIUS,
        }}
      />
      {/* Second cadre vert : 10px après le premier, 600px de hauteur */}
      <div
        className="overlay__frame"
        style={{
          top: FRAME2_TOP,
          height: FRAME_HEIGHT,
          borderRadius: BORDER_RADIUS,
        }}
      />
    </div>
  )
}
