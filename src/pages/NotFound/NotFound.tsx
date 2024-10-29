import { NavLink } from 'react-router-dom'
import s from './NotFound.module.css'

export const NotFound = (lang: any) => {
  return (
    <main className={s.NotFound}>
      <h1>404</h1>
      <h2>
        {
          lang.lang == 'pt' && <><span>ERROR:</span> Página não encontrada.</> || <><span>ERROR:</span> Page not found.</>
        }
      </h2>
      <NavLink className={s.btn} to={`/${lang.lang}`}>
      {
        lang.lang == 'pt' && 'Retornar à página inicial' || 'Return to home page'
      }
      </NavLink>
    </main>
  )
}
