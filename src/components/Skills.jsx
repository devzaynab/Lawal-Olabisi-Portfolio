import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaMobileScreen, FaReact } from 'react-icons/fa6'
import { SiFirebase, SiSass, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si'
import './Skills.css'
import { skillGroups } from '../data/portfolioData'

const iconMap = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  Sass: SiSass,
  'Responsive Design': FaMobileScreen,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Vite: SiVite,
  Vercel: SiVercel,
  Figma: FaFigma,
  Firebase: SiFirebase,
}

export default function Skills() {
  return (
    <section className="page-section" id="skills">
      <div className="container section-content">
        <p className="section-label">MY TOOLKIT</p>
        <h2 className="section-title">My toolkit.</h2>
        <p className="section-supporting-text">
          The tools I use to design, develop and deploy web experiences.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((item) => {
                  const Icon = iconMap[item] || FaReact
                  return (
                    <li key={item}>
                      <span className="tag-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
