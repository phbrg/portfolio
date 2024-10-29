import { AiOutlineBug } from "react-icons/ai";
import { LuLanguages } from "react-icons/lu";

import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

export const Header = (lang: any) => {
  
  return (
    <header className={s.Header}>
      <NavLink to={`/${lang.lang}`} className={s.logo}>ph <AiOutlineBug /></NavLink>
      <nav>
        <NavLink to={`/${lang.lang}`} className={s.btn}>Home</NavLink>
        <NavLink to={`/${lang.lang}/projects`} className={s.btn}>
          {
            lang.lang == 'pt' && 'Projetos' ||
            lang.lang == 'eng' && 'Projects'
          }
        </NavLink>
        <NavLink to={`/${lang.lang}/blog`} className={s.btn}>Blog</NavLink>
      </nav>
      <a
        data-tooltip-id='tooltip' 
        data-tooltip-content={
          lang.lang && (
            lang.lang == 'pt' && 'Change Language' ||
            lang.lang == 'eng' && 'Mudar Idioma'
          )
        } 
        data-tooltip-place="bottom" 
        className={s.lang} 
        href={
          lang.lang && (
            lang.lang == 'pt' && '/eng' ||
            lang.lang == 'eng' && '/pt'
          )
        }>
        <LuLanguages />
        {
          lang.lang == 'pt' && 'ENGLISH' ||
          lang.lang == 'eng' && 'PORTUGUÊS'
        }
      </a>
    </header>
  )
}
