import { NavLink } from 'react-router-dom'

import styles from './Nav.module.css'

export const Nav = () => {
  const url = window.location.href;
  let lang = url.split('.app/')[1];
  if(lang !== 'eng' && lang !== 'pt') lang = 'pt';

  return (
    <>
    {
      lang && 
      <nav>
        { lang == 'pt' && <a href='/eng' className={styles.eng}>ENGLISH</a> }
        { lang == 'eng' && <a href='/pt' className={styles.pt}>PORTUGUÊS</a> }
        <div>
          <NavLink to={`/${lang}`} className={styles.button}>Home</NavLink>
          { lang == 'eng' && <NavLink to={`/${lang}/projects`} className={styles.button}>Projects</NavLink> }
          { lang == 'pt' && <NavLink to={`/${lang}/projects`} className={styles.button}>Projetos</NavLink> }
          <NavLink to={`/${lang}/blog`} className={styles.button}>Blog</NavLink>
        </div>
      </nav>
    }
    </>
  )
}