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
    <section className={styles.NotFound}>
      <h1>404</h1>
      { userLang == 'eng' && <h2><span>ERROR:</span> Page Not Found.</h2> }
      { userLang == 'pt' && <h2><span>ERRO:</span> Página não encontrada.</h2> }
      <NavLink to={`/${userLang}`} className={styles.button}>Get back home</NavLink>
    </section>
  )
}
