import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import './Experience.css'

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Acmegrade',
    duration: '2024',
    type: 'Remote',
    highlights: [
      'Built a full-stack E-Commerce website using HTML, CSS, JS, Bootstrap, PHP, MySQL.',
      'Developed Admin Panel (products, orders, users, coupons). ',
      'Built User Panel (auth, cart, wishlist, checkout, payment). ',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
  {
    role: 'Social Media & Web Content Intern',
    company: 'Ashraya Hospitals',
    duration: '2025',
    type: 'Remote',
    highlights: [
      'Created Instagram health-awareness content (reels, posts, carousels). ',
      'Managed content calendar, posting schedule, and analytics. ',
      'Designed creatives using Canva & AI tools to boost engagement. ',
      'Optimized content based on insights and reach analysis. ',
    ],
    stack: ['CANVA', 'AI Tools', 'Analytics', 'Social Media'],
  },
]


export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" ref={ref} className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 / Experience</span>
          <h2 className="section-title">Where I've <span>Worked</span></h2>
        </motion.div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="experience__item"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="experience__dot">
                <FiBriefcase size={14} />
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <div className="experience__company-row">
                      <span className="experience__company">{exp.company}</span>
                      <span className="experience__sep">·</span>
                      <span className="experience__type">{exp.type}</span>
                    </div>
                  </div>
                  <span className="experience__duration">{exp.duration}</span>
                </div>

                <ul className="experience__highlights">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi}><span className="experience__bullet">▸</span> {h}</li>
                  ))}
                </ul>

                <div className="experience__stack">
                  {exp.stack.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
