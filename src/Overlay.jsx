import React, { useState, useEffect } from 'react'
import './Overlay.css'

const HEADER_TOP = 48
const HEADER_HEIGHT = 140
const GAP_BETWEEN_FRAMES = 40
const FRAME_HEIGHT = 600
const FRAME1_TOP = HEADER_TOP + HEADER_HEIGHT + GAP_BETWEEN_FRAMES
const FRAME2_TOP = FRAME1_TOP + FRAME_HEIGHT + GAP_BETWEEN_FRAMES
const BORDER_WIDTH = 10
const INNER_CORNER = 8
const BORDER_RADIUS = INNER_CORNER + BORDER_WIDTH
const PSEUDO_HEIGHT = 112
const PSEUDO_TOP = FRAME1_TOP + FRAME_HEIGHT
const PSEUDO_TOP_CENTERED = PSEUDO_TOP + GAP_BETWEEN_FRAMES / 2 - PSEUDO_HEIGHT / 2
const MARATHON_PROGRESS = 75 // 15/20 jeux
const SWITCH_INTERVAL_MS = 30 * 1000

/** Heure en France (Europe/Paris), progression 18h30 → 21h30 en % (0–100) */
function getStreamProgressPercent() {
  const now = new Date()
  const parisNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
  const minutes = parisNow.getHours() * 60 + parisNow.getMinutes() + parisNow.getSeconds() / 60
  const start = 18 * 60 + 30
  const end = 21 * 60 + 30
  if (minutes < start) return 0
  if (minutes >= end) return 100
  return Math.round(((minutes - start) / (end - start)) * 100)
}

export default function Overlay() {
  const [marathonView, setMarathonView] = useState(true)
  const [streamProgress, setStreamProgress] = useState(() => getStreamProgressPercent())

  useEffect(() => {
    const switchView = setInterval(() => setMarathonView((v) => !v), SWITCH_INTERVAL_MS)
    return () => clearInterval(switchView)
  }, [])

  useEffect(() => {
    if (marathonView) return
    const updateProgress = () => setStreamProgress(getStreamProgressPercent())
    updateProgress()
    const t = setInterval(updateProgress, 60 * 1000)
    return () => clearInterval(t)
  }, [marathonView])

  const progressPercent = marathonView ? MARATHON_PROGRESS : streamProgress

  return (
    <div className="overlay">
      {/* Cadre marathon / stream : alterne toutes les 30 s */}
      <div
        className="overlay__marathon"
        style={{ top: HEADER_TOP, height: HEADER_HEIGHT }}
      >
        <div className="overlay__marathon-dots" aria-hidden />
        <span className="overlay__marathon-text">
          {marathonView ? (
            <strong>Marathon zelda 100%</strong>
          ) : (
            <strong>Stream 18h30 - 21h30</strong>
          )}
        </span>
        <div className="overlay__marathon-bar">
          <div
            className="overlay__marathon-fill"
            style={{ width: `${progressPercent}%` }}
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
        <div className="overlay__pseudo-dots" aria-hidden />
        <img
          src={`${import.meta.env.BASE_URL}img/logo-twitch.svg`}
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
