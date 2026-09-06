import React from 'react'
import './Overlay.css'

const HEADER_TOP = 48
const PSEUDO_HEIGHT = 112
const GAP_PSEUDO_FRAME = -50
const FRAME_HEIGHT = 600
const PSEUDO_TOP = HEADER_TOP
const FRAME1_TOP = PSEUDO_TOP + PSEUDO_HEIGHT + GAP_PSEUDO_FRAME

export default function SoloOverlay() {
  return (
    <div className="overlay">
      <div
        className="overlay__frame"
        style={{ top: FRAME1_TOP, height: FRAME_HEIGHT }}
      />
      <div
        className="overlay__pseudo"
        style={{ top: PSEUDO_TOP, height: PSEUDO_HEIGHT }}
      >
        <div className="overlay__pseudo-dots" aria-hidden />
        <img
          src={`${import.meta.env.BASE_URL}img/logo-twitch.svg`}
          alt=""
          className="overlay__pseudo-logo"
          aria-hidden
        />
        <span className="overlay__pseudo-text">DUcLEMS</span>
      </div>
    </div>
  )
}
