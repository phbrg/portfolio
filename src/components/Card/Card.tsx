import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

import s from './Card.module.css'

export const Card = (data: { title: string, logo: string, date: string, description: any, tags: string[], link: string, blank: boolean }) => {
  return (
    <a target={data.blank ? '_blank' : '_self'} href={data.link} className={s.Card}>
      {
        data.logo == 'nest' && <SiNestjs className={s.logo} /> || 
        data.logo == 'node' && <FaNodeJs className={s.logo} /> || 
        data.logo == 'react' && <FaReact className={s.logo} /> ||
        data.logo == 'blog' && <FaBook className={s.logo} />
      }
      <div className={s.texts}>
        <div>
          <h1>{data.title} <span>{data.date}</span></h1>
          <h2>{data.description}</h2>
        </div>
        <div className={s.tags}>
          {
            data.tags.map((tag, key) => (
              <p className={s.tag} key={key}><span>#</span>{tag}</p>
            ))
          }
        </div>
      </div>
    </a>
  )
}