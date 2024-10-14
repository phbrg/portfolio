import { NavLink, useParams } from 'react-router-dom'

import styles from './NotFound.module.css'

import { languageManager } from '../../utils/language';

export const NotFound = () => {
  let { lang } = useParams();
  const userLang = languageManager(lang);

  return (
    <section className={`def ${styles.NotFound}`}>
      <h1>404</h1>
      <h2>
        {
          userLang == 'eng' && <><span>ERROR:</span> Page Not Found.</> ||
          userLang == 'pt' && <><span>ERRO:</span> Página não encontrada.</>
        }
      </h2>
      <NavLink to={`/${userLang}`} className={styles.button}>
        {
          userLang == 'eng' && <>Get back home</> ||
          userLang == 'pt' && <>Voltar para home</>
        }
      </NavLink>
    </section>
  )
}
