import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'
import './Contact.css'

const contactLinks = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'beerneedilucky7@gmail.com', href: 'mailto:beerneedilucky7@gmail.com' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 7207231018', href: 'tel: +91 7207231018' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/beerneedi-lucky', href: 'https://www.linkedin.com/in/beerneedi-lucky-06b892250/' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/beerneedi-lucky', href: 'https://github.com/BeerneediLucky' },
]

import emailjs from 'emailjs-com'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // IMPORTANT: Replace these with your actual EmailJS IDs
    const serviceId = 'service_id'
    const templateId = 'template_id'
    const publicKey = 'public_key'

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        console.log('Email sent:', result.text)
        setSent(true)
        setLoading(false)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      }, (error) => {
        console.error('Email error:', error.text)
        setLoading(false)
        alert('Failed to send message. Please try again later.')
      })
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 / Contact</span>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <p className="contact__subtitle">
            Open to full-time roles and freelance projects. Let's build something great.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Get in Touch</h3>
            <p>
              Whether you have a role to fill, a project to build, or just want to say hi —
              my inbox is always open.
            </p>
            <div className="contact__links">
              {contactLinks.map((link, i) => (
                <a key={i} href={link.href} className="contact__link" target="_blank" rel="noopener noreferrer">
                  <span className="contact__link-icon">{link.icon}</span>
                  <div>
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={sent || loading}>
              {loading ? (
                <>Sending...</>
              ) : sent ? (
                <><FiCheckCircle /> Message Sent!</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>

            {sent && (
              <p className="contact__success">
                ✓ Thanks! I'll get back to you within 24 hours.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
