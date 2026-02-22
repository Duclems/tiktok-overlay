import React from 'react'
import './Overlay.css'

const FRAME1_TOP = 230
const FRAME_HEIGHT = 600
const GAP_BETWEEN_FRAMES = 40
const FRAME2_TOP = FRAME1_TOP + FRAME_HEIGHT + GAP_BETWEEN_FRAMES
const BORDER_RADIUS = 64
const PSEUDO_HEIGHT = 112
const PSEUDO_TOP = FRAME1_TOP + FRAME_HEIGHT
const PSEUDO_TOP_CENTERED = PSEUDO_TOP + GAP_BETWEEN_FRAMES / 2 - PSEUDO_HEIGHT / 2

export default function Overlay() {
  return (
    <div className="overlay">
      {/* Premier cadre vert : 230px du top, 600px de hauteur */}
      <div
        className="overlay__frame"
        style={{
          top: FRAME1_TOP,
          height: FRAME_HEIGHT,
          borderRadius: BORDER_RADIUS,
        }}
      />
      {/* Cadre pseudo entre les deux cadres (même style, content-width, fond défilant) */}
      <div
        className="overlay__pseudo"
        style={{
          top: PSEUDO_TOP_CENTERED,
          height: PSEUDO_HEIGHT,
          borderRadius: BORDER_RADIUS,
        }}
      >
        <img
          src="/img/logo-twitch.svg"
          alt=""
          className="overlay__pseudo-logo"
          aria-hidden
        />
        <span className="overlay__pseudo-text">DUcLEMS</span>
      </div>
      {/* Second cadre vert */}
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
