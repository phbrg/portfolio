import { useParams } from 'react-router-dom';

import json from '../../../posts.json'

import styles from './Post.module.css'

export const Post = () => {
  const { id } = useParams();
  const post = json.posts.find((p) => p.id === Number(id));

  if(!post) {
    window.location.href = '/error'
  }

  return (
    <section className={styles.Post}>
      <header>
        {
          post && <>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
          </>
        }
      </header>
      {
        post && post.body.map((paragraph, key) => (
          <p key={key} className={styles.body}>{paragraph}</p>
        ))
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
