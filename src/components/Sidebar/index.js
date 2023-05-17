import './index.scss'
import { useState } from 'react'
import LogoBlossom from '../../assets/images/pxl-blossom.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faLinkedin, faGithub} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoBlossom} alt="Logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/rosie-victoria-burnett-7806a448/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RosieMoonYin"
            target="_blank"
            rel="noreferrer"
          >
             <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar