import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";

import { toast } from "sonner";
import { NavLink } from "react-router-dom";

import s from './Home.module.css'

export const Home = (lang: any) => {
  const handleOnClick = () => {
    navigator.clipboard.writeText('pedrohenriquebatistabergamin@gmail.com')
    .then(() => {
      if(lang.lang?.toLowerCase() == 'eng') toast.success('My email was copied to your clipboard.');
      if(lang.lang?.toLowerCase() == 'pt') toast.success('Meu email foi copiado para sua area de transferencia.');
    });
  }

  return (
    <main className={s.Home}>
      <div className={s.head}>
        <h1>
          {
            lang.lang == 'pt' && <>Olá, eu sou o <span>Pedro Henrique</span> e sou um <br /> <span>Jovem Aprendiz</span> & <span>Estudante</span> de <span>Engenharia de Software</span>.</> ||
            <>Hey, I'm <span>Pedro Henrique</span> and I'm a <br /> <span>Software Engineering Intern</span> & <span>Student</span>.</>
          }
        </h1>
        <h2>
          {
            lang.lang == 'pt' && <><span>&gt;_</span> Tornando sonhos realidade com linhas de código.</> ||
            <><span>&gt;_</span> Turning dreams into reality with code lines.</>
          }
        </h2>
        <div className={s.subtexts}>
          <p><FaSuitcase />&nbsp;{ lang.lang == 'pt' && 'Jovem Aprendiz na Cognizant' || 'Intern at Cognizant' }</p>
          <p><IoLocationSharp /> São Paulo, { lang.lang == 'pt' && 'Brasil' || 'Brazil' }</p>
        </div>
      </div>
      <div className={s.buttons}>
          <NavLink to={`/${lang.lang}/about`}>
            {
              lang.lang == 'pt' && 'Conhecer mais' || 'Meet me'
            }
            <FaArrowTrendUp />
          </NavLink >
          <NavLink to={`/${lang.lang}/projects`} className={s.projects}>
            {
              lang.lang == 'pt' && 'Ver Projetos' || 'View Projects'
            }
          </NavLink>
      </div>
      <div className={s.links}>
        <a data-tooltip-id='tooltip' data-tooltip-content='Github' data-tooltip-place="bottom"  className={s.link} href="https://github.com/phbrg" target="_blank"><FaGithub /></a>
        <a data-tooltip-id='tooltip' data-tooltip-content='Linkedin' data-tooltip-place="bottom"  className={s.link} href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target="_blank"><FaLinkedin /></a>
        <a data-tooltip-id='tooltip' data-tooltip-content={lang.lang == 'pt' ? 'Currículo' : 'CV'} data-tooltip-place="bottom"  className={s.link} 
        href={
            lang.lang == 'eng' && 'https://docs.google.com/document/d/1aVV1x9CODxOPlFv7auVmbeONCuJe41ZmMJuVrC0MMdk/edit?usp=sharing' || 
            'https://docs.google.com/document/d/1VjwgN47X7yN2JsFqs6ubgZW4ujZw1FlYHNaBTkr-No0/edit?usp=sharing'
          } target="_blank"><FaFile /></a>
        <a onClick={handleOnClick} data-tooltip-id='tooltip' data-tooltip-content='Email' data-tooltip-place="bottom"  className={s.link}><BsEnvelopeAtFill /></a>
      </div>
    </main>
  )
}
