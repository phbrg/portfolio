import './NotFound.css'

import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='NotFound'>
      <h2>404 Not Found</h2>
      <h1>You seem lost</h1>
      <NavLink to="/" className='home-button'>Get back home</NavLink>
    </div>
  )
}

export default NotFound