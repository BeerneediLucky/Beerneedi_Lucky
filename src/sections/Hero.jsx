import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Ambient background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">
        <motion.span className="hero__tag" {...fadeUp(0)}>
          <span className="hero__tag-dot" /> Available for opportunities
        </motion.span>

        <motion.h1 className="hero__name" {...fadeUp(0.1)}>
          Hi, I'm{' '}
          <span className="hero__name-accent">Beerneedi Lucky</span>
        </motion.h1>

        <motion.h2 className="hero__title" {...fadeUp(0.2)}>
          Frontend Developer
          <br />
          <span className="hero__title-sub">React · JavaScript · API Integration</span>
        </motion.h2>

        <motion.p className="hero__tagline" {...fadeUp(0.3)}>
          I build responsive, real-world web applications with clean UI and scalable code.
        </motion.p>

        <motion.div className="hero__actions" {...fadeUp(0.4)}>
          <a href="#projects" className="btn btn-primary">
            View Projects <HiArrowDown />
          </a>
          <a
            href="/resume.pdf"
            className="btn btn-secondary"
            download
          >
            Download Resume
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
        </motion.div>

        <motion.div className="hero__socials" {...fadeUp(0.5)}>
          <a href="https://github.com/BeerneediLucky" target="_blank" rel="noopener noreferrer" className="hero__social-link">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/beerneedi-lucky-06b892250/" target="_blank" rel="noopener noreferrer" className="hero__social-link">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:beerneedilucky7@gmail.com" className="hero__social-link">
            <FiMail size={20} />
          </a>
        </motion.div>

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <HiArrowDown size={16} />
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="hero__grid" />
    </section>
  )
}
