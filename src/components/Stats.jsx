import './Stats.css'

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '5+', label: 'Technologies' },
]

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Portfolio statistics">
      <div className="container stats-content">
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card card-hover" key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
