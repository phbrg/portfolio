import { NavLink, useParams } from 'react-router-dom'

import styles from './NotFound.module.css'
import { useState, useEffect } from 'react';

export const NotFound = () => {
  let { lang } = useParams();
  if(!lang || lang.toLocaleLowerCase() !== 'eng' && lang.toLocaleLowerCase() !== 'pt') window.location.href = '/pt'

  const [userLang, setUserLang] = useState('');
  useEffect(() => {
    if(!userLang && lang) {
      setUserLang(lang.toLocaleLowerCase());
    }
  }, [lang, userLang])

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
