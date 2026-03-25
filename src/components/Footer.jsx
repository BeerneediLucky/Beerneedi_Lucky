import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#hero" className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          Lucky
          <span className="footer__logo-bracket"> /&gt;</span>
        </a>

        <p className="footer__copy">
          Built with <FiHeart className="footer__heart" /> using React + Vite · {year}
        </p>

        <div className="footer__socials">
          <a href="https://github.com/beerneedi-lucky" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/beerneedi-lucky" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:beerneedi.lucky@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
