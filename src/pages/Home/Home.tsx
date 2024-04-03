import { FaArrowTrendUp, FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'sonner'

import styles from './Home.module.css'
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

export const Home = () => {
  let { lang } = useParams();
  if(!lang || lang.toLocaleLowerCase() !== 'eng' && lang.toLocaleLowerCase() !== 'pt') window.location.href = '/pt'

  const [userLang, setUserLang] = useState('');
  useEffect(() => {
    if(!userLang && lang) {
      setUserLang(lang.toLocaleLowerCase());
    }
  }, [lang, userLang])

  const handleOnClick = () => {
    navigator.clipboard.writeText('pedrohenriquebatistabergamin@gmail.com')
    .then(() => {
      if(lang?.toLocaleLowerCase() == 'eng') toast(<p className='toast'>✅ My email was copied to your clipboard.</p>);
      if(lang?.toLocaleLowerCase() == 'pt') toast(<p className='toast'>✅ Meu email foi copiado para sua area de transferencia.</p>);
    });
  }
    return (
      <section className={styles.Home}>
        <div className={styles.intro}>
          { userLang == 'eng' && <>
            <h1>Hello World, I'm Pedro Henrique - <span>FullStack Developer</span></h1>
            <h2>_Turning dreams into reality with code lines.</h2>
          </> }
          { userLang == 'pt' && <>
            <h1>Hello World, Eu sou Pedro Henrique - <span>FullStack Developer</span></h1>
            <h2>_Tornando sonhos realidade com linhas de código.</h2>
          </> }
          <div className={styles.buttons}>
            { userLang == 'eng' && <>
              <NavLink to='/projects' className={styles.button}>View Projects <FaArrowTrendUp className={styles.arrow}/></NavLink>
              <a onClick={handleOnClick} className={styles.button}>Let's build something?</a>
            </> }
            { userLang == 'pt' && <>
              <NavLink to='/projects' className={styles.button}>Ver projetos <FaArrowTrendUp className={styles.arrow}/></NavLink>
              <a onClick={handleOnClick} className={styles.button}>Vamos construir algo?</a>
            </> }
          </div>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/phbrg" target='_blank'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target='_blank'><FaLinkedin /></a>
          { userLang == 'eng' && <a href="https://docs.google.com/document/d/1NG3ZsTAPb9_DWhIYmWiTevGYCRo5xsd_9uaHZUjROxY/edit?usp=sharing" target='_blank'><FaFile /></a> }
          { userLang == 'pt' && <a href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing" target='_blank'><FaFile /></a> }
          <a onClick={handleOnClick}><MdEmail /></a>
        </div>
      </section>
    )
}
