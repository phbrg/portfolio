import { NavLink } from 'react-router-dom'

import './Nav.css'

export const Nav = () => {
  return (
    <nav>
      <NavLink to='/' className={({ isActive }) => ( isActive ? 'active button' : 'inactive button')}>Home</NavLink>
      <NavLink to='/projects' className={({ isActive }) => ( isActive ? 'active button' : 'inactive button')}>Projects</NavLink>
      <NavLink to='/blog' className={({ isActive }) => ( isActive ? 'active button' : 'inactive button')}>Blog</NavLink>
    </nav>
  )
}
