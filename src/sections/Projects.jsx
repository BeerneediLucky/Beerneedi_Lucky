import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiStar, FiGitBranch } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiCss } from 'react-icons/si'
import './Projects.css'

const techIcon = {
  React: <SiReact />,
  'Node.js': <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  JavaScript: <SiJavascript />,
  CSS3: <SiCss />,
}

const featuredProjects = [
  {
    number: '01',
    title: 'BookStore Web App',
    type: 'Full-Stack Application',
    description:
      'A production-ready bookstore platform with separate admin and user panels. Admins manage inventory with full CRUD operations; users can browse, search, and explore books — all backed by a RESTful API.',
    problem: 'Most open-source bookstore projects are read-only demos. This one handles real state management, auth-protected admin routes, and persistent data.',
    features: [
      'Admin panel with full CRUD for book inventory',
      'RESTful API integration (Node.js + Express)',
      'Persistent data with MongoDB',
      'Role-based routing (Admin / User)',
      'Deployed and live on the web',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://your-bookstore-demo.netlify.app',
    github: 'https://github.com/beerneedi-lucky/bookstore-app',
    accent: '#6c63ff',
  },
  {
    number: '02',
    title: 'Weather App',
    type: 'API Integration · React',
    description:
      'A sleek, real-time weather dashboard that fetches live data from the OpenWeatherMap API. Users can search any city worldwide and instantly get temperature, humidity, wind speed, and weather conditions.',
    problem: 'Demonstrates real-world API consumption, async data handling, and building a polished UI around third-party data.',
    features: [
      'Real-time data from OpenWeatherMap API',
      'City search with instant results',
      'Dynamic weather icons and background',
      'Temperature units toggle (°C / °F)',
      'Fully responsive on all devices',
    ],
    stack: ['React', 'JavaScript', 'CSS3'],
    live: 'https://your-weather-app.netlify.app',
    github: 'https://github.com/beerneedi-lucky/weather-app',
    accent: '#ee5c8a',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/beerneedi-lucky/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork).slice(0, 6))
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching repos:', err)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">03 / Projects</span>
          <h2 className="section-title">What I've <span>Built</span></h2>
          <p className="projects__subtitle">
            Real products — deployed, functional, and built to solve actual problems.
          </p>
        </motion.div>

        <div className="projects__list">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ '--project-accent': project.accent }}
            >
              <div className="project-card__header">
                <div className="project-card__meta">
                  <span className="project-card__number">{project.number}</span>
                  <div>
                    <span className="project-card__type">{project.type}</span>
                    <h3 className="project-card__title">{project.title}</h3>
                  </div>
                </div>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <FiGithub size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--live">
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__body">
                <div className="project-card__features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((f, fi) => (
                      <li key={fi}>
                        <span className="project-card__check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__stack">
                  <h4>Tech Stack</h4>
                  <div className="project-card__badges">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-card__badge">
                        <span className="badge-icon">{techIcon[tech]}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repos Section */}
        <div className="projects__github">
          <h3 className="github-title">More Open Source <span>Contributions</span></h3>
          <div className="github-grid">
            {loading ? (
              <p>Loading repositories...</p>
            ) : (
              repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="github-card__header">
                    <FiGithub size={20} />
                    <FiExternalLink size={16} />
                  </div>
                  <h4 className="github-card__title">{repo.name}</h4>
                  <p className="github-card__desc">{repo.description || 'No description available.'}</p>
                  <div className="github-card__footer">
                    <span>{repo.language}</span>
                    <div className="github-card__stats">
                      <span><FiStar size={14} /> {repo.stargazers_count}</span>
                      <span><FiGitBranch size={14} /> {repo.forks_count}</span>
                    </div>
                  </div>
                </motion.a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
