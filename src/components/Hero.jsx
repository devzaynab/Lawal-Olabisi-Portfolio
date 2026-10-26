import { useEffect, useState } from 'react'
import { FiArrowDownRight, FiDownload } from 'react-icons/fi'
import './Hero.css'
import { roles, cvPath } from '../data/portfolioData'

export default function Hero() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [typedText, setTypedText] = useState(() => (prefersReducedMotion ? roles[0] : ''))
  const [isDeleting, setIsDeleting] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined
    }

    const currentRole = roles[roleIndex]

    if (!isDeleting && typedText === currentRole) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 1200)
      return () => window.clearTimeout(timeout)
    }

    if (isDeleting && typedText === '') {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }, 180)
      return () => window.clearTimeout(timeout)
    }

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentRole.slice(0, typedText.length - 1))
      } else {
        setTypedText(currentRole.slice(0, typedText.length + 1))
      }
    }, isDeleting ? 55 : 90)

    return () => window.clearTimeout(timeout)
  }, [typedText, isDeleting, prefersReducedMotion, roleIndex])

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">Hi, I&apos;m</p>
          <h1 id="hero-heading">
            Lawal <span className="accent-text">Olabisi.</span>
          </h1>

          <div className="typing-block" aria-live="polite">
            <span className="typing-label">Frontend Developer</span>
            <span className="typing-text">
              {typedText}
              <span className="cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-intro">
            I&apos;m a frontend developer passionate about building responsive, user-friendly
            websites and turning ideas into functional digital experiences.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              <span>View My Work</span>
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="secondary-button" href={cvPath} download>
              <span>Download My CV</span>
              <FiDownload aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
