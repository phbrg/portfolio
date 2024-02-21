import { NavLink } from 'react-router-dom'

import './NotFound.css'

export const NotFound = () => {
  return (
    <section className='NotFound'>
      <h1>404</h1>
      <h2><span>ERROR:</span> Page Not Found.</h2>
      <NavLink to='/' className='button'>Get back home</NavLink>
    </section>
  )
}
