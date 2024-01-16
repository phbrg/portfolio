import './Nav.css'

import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
      <NavLink to="/" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>About me</NavLink>
      <NavLink to="/projects" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>Projects</NavLink>
    </nav>
  )
}

export default Nav