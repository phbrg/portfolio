import s from './Intro.module.css'

import { FiArrowLeft } from "react-icons/fi";

import { NavLink } from 'react-router-dom';

type IntroType = {
  title: any;
  description: any;
  language: any;
}

export const Intro = ({title, description, language}: IntroType) => {
  return (
    <div className={s.Intro}>
      <NavLink to={`/${language}`} className={s.link}>
        <FiArrowLeft className={s.ReturnIcon} />
        <p>{
          language == 'eng' ? 'Return home' : 'Retornar ao inicio'
        }</p>
      </NavLink>
      <div className={s.textsWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
