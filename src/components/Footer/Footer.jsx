import { NavLink } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='Footer'>
      <p>2024 &copy; phbrg</p>
      <NavLink to="/" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>Home</NavLink>
    </footer>
  )
}

export default Footer