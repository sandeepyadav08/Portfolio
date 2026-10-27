import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'

function getSavedTheme() {
  try {
    return localStorage.getItem('theme') === 'light'
  } catch {
    return false
  }
}

export function Header() {
  const [isActive, setActive] = useState(false)
  const [isLight, setLight] = useState(getSavedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    try {
      localStorage.setItem('theme', isLight ? 'light' : 'dark')
    } catch {}
  }, [isLight])

  function toggleTheme() {
    setLight(!isLight)
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Sandeep "}</span>
          <span>{" Yadav/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          checked={isLight}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
           <a href="/Sandeep_Yadav_Resume.pdf" download="Sandeep_Yadav_Resume.pdf" className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
