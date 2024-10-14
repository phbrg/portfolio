import { NavLink } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

import styles from './Nav.module.css'

export const Nav = () => {
  const url = window.location.href;
  let lang = url.split('.app/')[1];
  if(lang !== 'eng' && lang !== 'pt') lang = 'pt';

  return (
    <>
    <Tooltip id="tooltip" />
    {
      lang && 
      <nav>
        { lang == 'pt' && <a data-tooltip-id="tooltip" data-tooltip-content="Change Language" data-tooltip-place="right" href='/eng' className={styles.eng}>ENGLISH</a> }
        { lang == 'eng' && <a data-tooltip-id="tooltip" data-tooltip-content="Mudar Idioma" data-tooltip-place="right" href='/pt' className={styles.pt}>PORTUGUÊS</a> }
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