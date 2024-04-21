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
      if(lang?.toLocaleLowerCase() == 'eng') toast.success('My email was copied to your clipboard.');
      if(lang?.toLocaleLowerCase() == 'pt') toast.success('Meu email foi copiado para sua area de transferencia.');
    });
  }
    return (
      <section className={`def ${styles.Home}`}>
        <div className={styles.intro}>
          <h1>
            { 
              userLang == 'eng' && <>Hello World, I'm Pedro Henrique - <span>FullStack Developer</span></> ||
              userLang == 'pt' && <>Hello World, Eu sou o Pedro Henrique - <span>FullStack Developer</span></> 
            }
          </h1>
          <h2>
            {
              userLang == 'eng' && <>_Turning dreams into reality with code lines.</> ||
              userLang == 'pt' && <>_Tornando sonhos realidade com linhas de código.</> 
            }
          </h2>
          <div className={styles.buttons}>
            <NavLink to={userLang == 'eng' && '/eng/projects' || '/pt/projects'} className={styles.button}>
                {userLang == 'eng' && <>View Projects</> || userLang == 'pt' && <>Ver Projetos</>} 
                <FaArrowTrendUp className={styles.arrow}/>
            </NavLink>
            <a onClick={handleOnClick} className={styles.button}>
              {userLang == 'eng' && <>Let's build something?</> || userLang == 'pt' && <>Vamos construir algo?</> }
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/phbrg" target='_blank'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target='_blank'><FaLinkedin /></a>
          <a href={
            userLang == 'eng' && 'https://docs.google.com/document/d/1NG3ZsTAPb9_DWhIYmWiTevGYCRo5xsd_9uaHZUjROxY/edit?usp=sharing' || 
            'https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing'
          } target='_blank'><FaFile /></a>
          <a onClick={handleOnClick}><MdEmail /></a>
        </div>
      </section>
    )
}
