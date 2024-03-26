import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <ul className="list-container">
      <li className="wave-logo-heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <h1 className="logo-name">Wave</h1>
      </li>
    </ul>
    <ul className="nav-menu">
      <li className="menu-details">
        <Link className="link-element" to="/">
          Home
        </Link>
      </li>
      <li className="menu-details">
        <Link className="link-element" to="/about">
          About
        </Link>
      </li>
      <li className="menu-details">
        <Link className="link-element" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
