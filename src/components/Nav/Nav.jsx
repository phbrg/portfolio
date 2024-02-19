import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='Nav'>
      <NavLink to="/" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>{({ isActive }) => ( isActive ? '_About me' : 'About me')}</NavLink>
      <NavLink to="/projects" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>{({ isActive }) => ( isActive ? '_Projects' : 'Projects')}</NavLink>
      <NavLink to="/blog" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>{({ isActive }) => ( isActive ? '_Blog' : 'Blog')}</NavLink>
    </nav>
  )
}

export default Nav