import s from './NotFound.module.css'

import { NavLink } from 'react-router-dom';

export const NotFound = (language: any) => {
  const lang = language.lang;
  return (
    <main className={s.NotFound}>
      <h3>404 | {lang == 'pt' ? 'Página não encontrada' : 'Page not found.'}</h3>
      <NavLink className={s.link} to={`/${lang}`}>
        {lang == 'pt' ? 'Voltar ao início' : 'Return home'}
      </NavLink>
    </main>
  )
}
