import { useParams } from 'react-router-dom';

import json from '../../data/posts.json'

import styles from './Post.module.css'
import { useState, useEffect } from 'react';

export const Post = () => {
  let { lang } = useParams();
  if(!lang || lang.toLocaleLowerCase() !== 'eng' && lang.toLocaleLowerCase() !== 'pt') window.location.href = '/pt'

  const [userLang, setUserLang] = useState('');
  useEffect(() => {
    if(!userLang && lang) {
      setUserLang(lang.toLocaleLowerCase());
    }
  }, [lang, userLang])

  const { id } = useParams();
  let post: any = 'awaiting';
  if(lang == 'eng') post = json.eng.find((p) => p.id === Number(id));
  if(lang == 'pt') post = json.pt.find((p) => p.id === Number(id));

  if(!post && post !== 'awaiting') {
    window.location.href = `/${lang}/error`;
  }

  return (
    <section className={`def ${styles.Post}`}>
      <header>
        {
          post && 
          <>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
          </>
        }
      </header>
      {
        post && post.body.map((paragraph: string, key: number) => (
          <p key={key} className={styles.body}>{paragraph}</p>
        ))
      }
      {
        post.image && 
        <div>
          <img src={post.image} alt="image" />
        </div>
      }
      <div className={styles.links}>
        {
          post && post.links && post.links.map((link: any, key: number) => (
            <a href={link.link} key={key}>{link.title}</a>
          ))
        }
      </div>
    </section>
  )
}
