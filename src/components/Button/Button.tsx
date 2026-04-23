import s from './Button.module.css'; 

import { NavLink } from 'react-router-dom';
import type { ReactElement } from "react";

import { IoIosArrowForward, IoMdLink } from "react-icons/io";

type ButtonType = {
  title: string;
  description: string;
  style: 'big' | 'small' | 'link';
  linkIcon: 'arrow' | 'link';
  date?: string;
  icon?: ReactElement;
  link?: string;
  redirect?: boolean;
};

const ICONS_MAP = {
  arrow: IoIosArrowForward,
  link: IoMdLink,
};

export const Button = ({ title, description, style, linkIcon, icon, link, redirect }: ButtonType) => {
  const Tag = redirect ? 'a' : NavLink;
  const navigationProps = redirect ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : { to: link || '#' };

  const EndIcon = ICONS_MAP[linkIcon];

  return (
    //@ts-ignore
    <Tag className={`${s.Button} ${s[style]}`} {...navigationProps}>
      <div className={s.textsWrapper}>
        {icon && <span className={s.icon}>{icon}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        
      <div className={s.endIcon}>
        <EndIcon className={s.linkIcon} />
      </div>
    </Tag>
  );
};