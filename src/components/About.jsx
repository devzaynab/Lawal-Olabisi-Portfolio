import './About.css'
import Stats from './Stats'
import Skills from './Skills'
import Mindset from './Mindset'
import Journey from './Journey'

export default function About() {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container section-content">
          <p className="section-label">ABOUT ME</p>
          <h2 className="section-title">A little about me.</h2>
          <p className="section-copy">
            I&apos;m a frontend developer and a 2026 graduate of the Federal University of
            Agriculture, Abeokuta. My journey into tech has involved UI/UX design exposure,
            frontend training and building practical web projects. I enjoy turning ideas into
            responsive interfaces and continuously improving my skills through hands-on work.
          </p>
        </div>
      </section>
      <Stats />
      <Skills />
      <Mindset />
      <Journey />
    </>
  )
}
