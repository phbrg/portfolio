import { useParams } from 'react-router-dom';

import json from '../../../posts.json'

import './Post.css'

export const Post = () => {
  const { id } = useParams();
  const post = json.posts.find((p) => p.id === Number(id));

  if(!post) {
    window.location.href = '/error'
  }

  return (
    <section className='Post'>
      <header>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
      </header>
      {
        post.body.map((paragraph, key) => (
          <p key={key} className='body'>{paragraph}</p>
        ))
      }
      <div className="links">
        {
          post.links && post.links.map((link, key) => (
            <a href={link.link} key={key}>{link.title}</a>
          ))
        }
      </div>
    </section>
  )
}
