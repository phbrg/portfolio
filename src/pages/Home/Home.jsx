import { NavLink } from 'react-router-dom'
import { toast } from 'sonner'

import './Home.css'

export const Home = () => {
  const handleOnClick = () => {
    navigator.clipboard.writeText('pedrohenriquebatistabergamin@gmail.com')
    .then(() => {
      toast(<p className='toast'>✅ My email was copied to your clipboard.</p>);
    });
  }

  return (
    <section className='Home'>
      <div className="intro">
        <h1>Hello World, I'm Pedro Henrique - <span>FullStack Developer</span></h1>
        <h2>Turning dreams into reality with code lines.</h2>
        <div className="buttons">
          <NavLink to='/projects' className='button'>View Projects <i className="fa-solid fa-arrow-trend-up"></i></NavLink>
          <a onClick={handleOnClick} className='button'>Let's build something?</a>
        </div>
      </div>
      <div className="links">
        <a href="https://github.com/phbrg" target='_blank'><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing" target='_blank'><i className="fa-solid fa-file"></i></a>
        <a onClick={handleOnClick}><i class="fa-solid fa-at"></i></a>
      </div>
    </section>
  )
}
