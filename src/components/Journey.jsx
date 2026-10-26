import './Journey.css'
import { journeyEntries } from '../data/portfolioData'

export default function Journey() {
  return (
    <section className="page-section" id="journey">
      <div className="container section-content">
        <p className="section-label">MY JOURNEY</p>
        <h2 className="section-title">Learning by doing.</h2>
        <p className="journey-intro">
          My journey into technology has included UI/UX exposure, frontend training and hands-on
          web development. I continue to build projects that strengthen my understanding and help
          me grow as a developer.
        </p>

        <div className="timeline" aria-label="My professional journey timeline">
          {journeyEntries.map((entry) => (
            <div className="timeline-item" key={`${entry.year}-${entry.title}`}>
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content">
                <p className="timeline-year">{entry.year}</p>
                <h3>{entry.title}</h3>
                <p>{entry.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
