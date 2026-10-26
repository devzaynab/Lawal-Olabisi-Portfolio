
import { FaGithub, FaLink } from 'react-icons/fa6';
import './Projects.css';
import { designGallery, projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="page-section" id="projects">
      <div className="container section-content">
        <div className="project-section-content">
          <p className="section-label">SELECTED PROJECTS</p>
          <h2 className="section-title">A few things I&apos;ve built.</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={
                        project.imageLabel ||
                        `${project.name} website screenshot`
                      }
                      loading="lazy"
                    />
                  )}
                  <div className="project-actions">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View GitHub repository for ${project.name}`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live project for ${project.name}`}
                      >
                        <FaLink aria-hidden="true" />
                        <span>Live</span>
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="project-meta">
                  <div className="project-heading">
                    <h3>{project.name}</h3>

                    {project.status && (
                      <span className="project-status">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p>{project.description}</p>

                  <ul className="tech-pills">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="project-section-content" id="design">
          <p className="section-label">UI/UX DESIGN</p>

          <h2 className="section-title">
            A glimpse into my design work.
          </h2>

          <p className="section-supporting-text">
            A selection of interface designs and visual explorations
            focused on clarity, usability and thoughtful user experiences.
          </p>

          <div className="design-grid">
            {designGallery.map((item) => (
              <figure className="design-card" key={item.title}>
                <div className="design-visual">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      loading="lazy"
                    />
                  )}
                </div>

                <figcaption className="design-meta">
                  <h3>{item.title}</h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View design <FaLink aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="design-caption">
                      Design link coming soon
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
