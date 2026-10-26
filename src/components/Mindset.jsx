import { FaLightbulb, FaPenRuler, FaPuzzlePiece, FaWandSparkles } from 'react-icons/fa6'
import './Mindset.css'
import { mindsetCards } from '../data/portfolioData'

const iconMap = {
  Understand: FaLightbulb,
  Plan: FaPenRuler,
  Build: FaPuzzlePiece,
  Improve: FaWandSparkles,
}

export default function Mindset() {
  return (
    <section className="page-section" id="mindset">
      <div className="container section-content">
        <p className="section-label">APPROACH</p>
        <h2 className="section-title">How I approach problems.</h2>
        <p className="mindset-intro">
          I believe good development begins with understanding what needs to be solved, not
          just writing code. I take time to understand the user&apos;s needs, break complex
          problems into manageable steps and consider how each decision affects the overall
          experience. I build, test, identify issues and refine my work based on what I learn.
          I also understand that improvement is continuous, so I remain open to feedback and new
          ways of solving problems.
        </p>

        <div className="mindset-grid">
          {mindsetCards.map((card) => {
            const Icon = iconMap[card.title] || FaLightbulb
            return (
              <article className="mindset-card" key={card.title}>
                <div className="mindset-header">
                  <span className="mindset-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
