import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman,
} from 'react-icons/si'
import './Skills.css'

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { icon: <SiHtml5 />, name: 'HTML5', color: '#e34c26' },
      { icon: <SiCss />, name: 'CSS3', color: '#264de4' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#f7df1e' },
      { icon: <SiReact />, name: 'React', color: '#61dafb' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { icon: <SiNodedotjs />, name: 'Node.js', color: '#68a063' },
      { icon: <SiExpress />, name: 'Express', color: '#aaa' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB', color: '#4db33d' },
      { icon: <SiMysql />, name: 'MySQL', color: '#00758f' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { icon: <SiGit />, name: 'Git', color: '#f05032' },
      { icon: <SiGithub />, name: 'GitHub', color: '#aaa' },
      { icon: <SiPostman />, name: 'Postman', color: '#ff6c37' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 / Skills</span>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
        </motion.div>

        <div className="skills__groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skills__group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <span className="skills__group-label">{group.label}</span>
              <div className="skills__cards">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.06 }}
                    whileHover={{ y: -6, scale: 1.04 }}
                  >
                    <span className="skill-card__icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-card__name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
