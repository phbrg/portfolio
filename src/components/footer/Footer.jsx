import './Footer.css'

import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='Footer'>
      <h4>&copy; phbrg</h4>
      <NavLink to="/" className={({ isActive }) => ( isActive ? 'active' : 'inactive')}>Home</NavLink>
    </footer>
  )
}

export default Footer