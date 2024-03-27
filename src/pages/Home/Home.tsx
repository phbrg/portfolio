import { FaArrowTrendUp, FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { toast } from 'sonner'

import styles from './Home.module.css'
import { MdEmail } from "react-icons/md";

export const Home = () => {
  const handleOnClick = () => {
    navigator.clipboard.writeText('pedrohenriquebatistabergamin@gmail.com')
    .then(() => {
      toast(<p className='toast'>✅ My email was copied to your clipboard.</p>);
    });
  }

  return (
    <section className={styles.Home}>
      <div className={styles.intro}>
        <h1>Hello World, I'm Pedro Henrique - <span>FullStack Developer</span></h1>
        <h2>_Turning dreams into reality with code lines.</h2>
        <div className={styles.buttons}>
          <NavLink to='/projects' className={styles.button}>View Projects <FaArrowTrendUp className={styles.arrow}/></NavLink>
          <a onClick={handleOnClick} className={styles.button}>Let's build something?</a>
        </div>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/phbrg" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target='_blank'><FaLinkedin /></a>
        <a href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing" target='_blank'><FaFile /></a>
        <a onClick={handleOnClick}><MdEmail /></a>
      </div>
    </section>
  )
}
