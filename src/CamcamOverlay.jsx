import React, { useState, useEffect } from 'react'
import './Overlay.css'

const HEADER_TOP = 48
const HEADER_HEIGHT = 140
const GAP_AFTER_MARATHON = 40
const PSEUDO_HEIGHT = 112
const GAP_PSEUDO_FRAME = -50
const FRAME_HEIGHT = 600
const PSEUDO_TOP_CAMCAM = HEADER_TOP + HEADER_HEIGHT + GAP_AFTER_MARATHON
const FRAME1_TOP = PSEUDO_TOP_CAMCAM + PSEUDO_HEIGHT + GAP_PSEUDO_FRAME
const MARATHON_PROGRESS = 70
const SWITCH_INTERVAL_MS = 30 * 1000

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

export default function CamcamOverlay() {
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
      {/* Cadre marathon / stream (défile des heures) */}
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
      {/* Un seul cadre */}
      <div
        className="overlay__frame"
        style={{ top: FRAME1_TOP, height: FRAME_HEIGHT }}
      />
      {/* Pseudo au-dessus du cadre (sur la barre du haut) */}
      <div
        className="overlay__pseudo"
        style={{ top: PSEUDO_TOP_CAMCAM, height: PSEUDO_HEIGHT }}
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
