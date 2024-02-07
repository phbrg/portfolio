import './NotFound.css'

import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='NF'>
      <div>
        <h1>404</h1>
        <h2>Error, page not found...</h2>
      </div>
      <NavLink to="/" className='home'>Home page</NavLink>
    </section>
  )
}

export default NotFound