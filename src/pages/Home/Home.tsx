import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";

import { toast } from "sonner";

import s from './Home.module.css'
import { NavLink } from "react-router-dom";

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
            lang.lang == 'pt' && <>Olá, eu sou o <span>Pedro Henrique</span> e sou um <br /> <span>Desenvolvedor FullStack & Estudante de Engenharia de Software</span>. 👨‍💻</> ||
            <>Hey, I'm <span>Pedro Henrique</span> and I'm a <br /> <span>FullStack Developer & Software Engineering Student</span>. 👨‍💻</>
          }
        </h1>
        <h2>
          {
            lang.lang == 'pt' && 'Tornando sonhos realidade com linhas de código.' ||
            'Turning dreams into reality with code lines.'
          }
        </h2>
        <div className={s.subtexts}>
          <p className={s.status}><span className={s.circleOut}><span className={s.circleIn}></span></span> Open to work</p>
          <p className={s.location}><IoLocationSharp /> São Paulo, { lang.lang == 'pt' && 'Brasil' || 'Brazil' }</p>
        </div>
      </div>
      <div className={s.buttons}>
          <NavLink className={s.projects} to={`/${lang.lang}/projects`}>
          {
            lang.lang == 'pt' && 'Ver projetos' || 'View projects'
          }
          <FaArrowTrendUp />
          </NavLink>
          <p onClick={handleOnClick} className={s.contact}>
          {
            lang.lang == 'pt' && 'Vamos construir algo?' || "Let's build something?"
          }
          </p>
      </div>
      <div className={s.links}>
        <a data-tooltip-id='tooltip' data-tooltip-content='Github' data-tooltip-place="bottom"  className={s.link} href="https://github.com/phbrg" target="_blank"><FaGithub /></a>
        <a data-tooltip-id='tooltip' data-tooltip-content='Linkedin' data-tooltip-place="bottom"  className={s.link} href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target="_blank"><FaLinkedin /></a>
        <a data-tooltip-id='tooltip' data-tooltip-content='CV' data-tooltip-place="bottom"  className={s.link} 
        href={
            lang.lang == 'eng' && 'https://docs.google.com/document/d/1NG3ZsTAPb9_DWhIYmWiTevGYCRo5xsd_9uaHZUjROxY/edit?usp=sharing' || 
            'https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing'
          } target="_blank"><FaFile /></a>
        <a onClick={handleOnClick} data-tooltip-id='tooltip' data-tooltip-content='Email' data-tooltip-place="bottom"  className={s.link}><BsEnvelopeAtFill /></a>
      </div>
    </main>
  )
}
