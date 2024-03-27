import { NavLink } from 'react-router-dom'

import styles from './Nav.module.css'

export const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.inactive) + ' ' + styles.button}>Home</NavLink>
        <NavLink to='/projects' className={({ isActive }) => (isActive ? styles.active : styles.inactive) + ' ' + styles.button}>Projects</NavLink>
        <NavLink to='/blog' className={({ isActive }) => (isActive ? styles.active : styles.inactive) + ' ' + styles.button}>Blog</NavLink>
      </div>
    </nav>
  )
}
