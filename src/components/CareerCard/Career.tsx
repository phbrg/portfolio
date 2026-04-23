import s from './Career.module.css'

import type { ReactElement } from 'react';

import { FiBriefcase } from "react-icons/fi";

type role = {
  id: number;
  title: string;
  company: string;
  date: string;
  bulletPoints?: Array<ReactElement>;
}

type CareerType = {
  roles: Array<role>;
  language: any
}

export const Career = ({roles, language}: CareerType) => {
  return (
    <div className={`${s.Career} df-card-style`}>
      <div className={s.header}>
        <span className={s.headerIcon}><FiBriefcase /></span>
        <h3>{language == 'pt' ? 'Carreira' : 'Career'}</h3>
      </div>
      {
        roles.map((role) => (
          <div 
            className={`${s.role} ${role.id > 1 ? s.borderTop : ''}`} 
            key={role.id}
          >
            <div className={s.roleHeader}>
              <div>
                <h4>{role.title}</h4>
                <p>{role.date}</p>
              </div>
              <p>{role.company}</p>
            </div>
              {
                role.bulletPoints && 
                <ul>{
                  role.bulletPoints?.map((point) => (
                    <li>{point}</li>
                  ))
                }</ul>
              }
          </div>
        ))
      }
    </div>
  )
}
