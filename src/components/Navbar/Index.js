import { NavLink } from 'react-router-dom'

import './../../components/Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">

        </div>
        <div className="nav-elements">

        <li>
      
            </li>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/path">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <button>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar