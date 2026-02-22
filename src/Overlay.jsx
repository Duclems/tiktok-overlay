import React from 'react'
import './Overlay.css'

const HEADER_TOP = 48
const HEADER_HEIGHT = 140
const GAP_BETWEEN_FRAMES = 40
const FRAME_HEIGHT = 600
const FRAME1_TOP = HEADER_TOP + HEADER_HEIGHT + GAP_BETWEEN_FRAMES
const FRAME2_TOP = FRAME1_TOP + FRAME_HEIGHT + GAP_BETWEEN_FRAMES
const BORDER_WIDTH = 16
const INNER_CORNER = 32
const BORDER_RADIUS = INNER_CORNER + BORDER_WIDTH
const PSEUDO_HEIGHT = 112
const PSEUDO_TOP = FRAME1_TOP + FRAME_HEIGHT
const PSEUDO_TOP_CENTERED = PSEUDO_TOP + GAP_BETWEEN_FRAMES / 2 - PSEUDO_HEIGHT / 2
const MARATHON_PROGRESS = 70

export default function Overlay() {
  return (
    <div className="overlay">
      {/* Cadre marathon en haut (style pseudo) */}
      <div
        className="overlay__marathon"
        style={{ top: HEADER_TOP, height: HEADER_HEIGHT }}
      >
        <span className="overlay__marathon-text"><strong>Marathon zelda 100%</strong></span>
        <div className="overlay__marathon-bar">
          <div
            className="overlay__marathon-fill"
            style={{ width: `${MARATHON_PROGRESS}%` }}
          />
        </div>
      </div>
      {/* Premier cadre vert : 230px du top, 600px de hauteur */}
      <div
        className="overlay__frame"
        style={{ top: FRAME1_TOP, height: FRAME_HEIGHT }}
      />
      {/* Cadre pseudo entre les deux cadres (même style, content-width, fond défilant) */}
      <div
        className="overlay__pseudo"
        style={{ top: PSEUDO_TOP_CENTERED, height: PSEUDO_HEIGHT }}
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
        style={{ top: FRAME2_TOP, height: FRAME_HEIGHT }}
      />
    </div>
  )
}
