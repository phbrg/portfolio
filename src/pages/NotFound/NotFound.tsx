import { NavLink } from 'react-router-dom'

import styles from './NotFound.module.css'

export const NotFound = () => {
  return (
    <section className={styles.NotFound}>
      <h1>404</h1>
      <h2><span>ERROR:</span> Page Not Found.</h2>
      <NavLink to='/' className={styles.button}>Get back home</NavLink>
    </section>
  )
}
