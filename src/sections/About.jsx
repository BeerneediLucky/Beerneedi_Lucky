import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiZap, FiLayers } from 'react-icons/fi'
import './About.css'

const cards = [
  {
    icon: <FiCode size={22} />,
    title: 'Clean Code',
    desc: 'I write structured, readable, and scalable code that is easy to maintain and extend.',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Fast Learner',
    desc: 'I quickly adapt to new technologies and apply them to solve real-world problems.',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Full-Stack Aware',
    desc: 'I understand how frontend, backend, and databases work together, enabling me to build more efficient and complete applications.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 / About Me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              I'm <strong>Beerneedi Lucky</strong> — a Frontend Developer focused on building responsive, scalable, and production-ready web applications. I specialize in developing user interfaces using{' '}
              <span className="about__highlight">React</span> and modern{' '}
              <span className="about__highlight">JavaScript</span>, with a strong emphasis on clean architecture and maintainable code.
            </p>
            <p>
              I have hands-on experience integrating RESTful APIs, managing application state, and deploying projects from development to production. I focus on building practical, real-world solutions that are both user-friendly and efficient.
            </p>
            <p>
              Currently open to <strong>full-time roles</strong> and{' '}
              <strong>freelance projects</strong> where I can contribute immediately and grow as
              an engineer.
            </p>

            <div className="about__tags">
              {['React.js', 'JavaScript ES6+', 'API Integration', 'Node.js', 'MySQL', 'Git', 'Postman'].map(
                (t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <div className="about__cards">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="about__card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="about__card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
