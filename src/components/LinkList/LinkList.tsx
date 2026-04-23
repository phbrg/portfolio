import { NavLink } from 'react-router-dom';
import s from './LinkList.module.css'

type Link = {
  id: number;
  type: 'a' | 'NavLink'
  link: string;
  title: string;
  date: string;
  description: string;
  tags?: Array<string>;
}

type LinkListType = {
  links: Array<Link>
}

export const LinkList = ({ links }: LinkListType) => {
  return (
    <div className={`${s.LinkList} df-card-style`}>
      {
        links.map((link) => {
          const Tag = link.type === 'NavLink' ? NavLink : 'a';
          const props = link.type === 'NavLink' ? { to: link.link } : { href: link.link, target: '_blank' };

          return (
            //@ts-ignore
            <Tag 
              key={link.id} 
              className={s.link}
              {...props}
            >
              <div>
                <div className={s.linkHeader}>
                  <h3>{link.title}</h3>
                  <p>{link.date}</p>
                </div>
                <p className={s.description}>{link.description}</p>
              </div>
              
              {link.tags && (
                <div className={s.tags}>
                  {link.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
              )}
            </Tag>
          );
        })
      }
    </div>
  );
};