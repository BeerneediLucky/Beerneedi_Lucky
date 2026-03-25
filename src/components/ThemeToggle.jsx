import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import './ThemeToggle.css'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="theme-toggle__icon"
          >
            <HiSun size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="theme-toggle__icon"
          >
            <HiMoon size={20} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="theme-toggle__background" />
    </button>
  )
}