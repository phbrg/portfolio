import { useParams } from 'react-router-dom';

import json from '../../../posts.json'

import './Post.css'

const Post = () => {
  const { id } = useParams();
  const post = json.posts.find((p) => p.id === Number(id));

  if(!post) {
    window.location.href = '/error'
  }

  return (
    <section className='Post'>
      <div className="post-header">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
      </div>
      {
        post.body.map((paragraph, key) => (
          <p className='body' key={key}>{paragraph}</p>
        ))
      }
      <div className="links">
        {
          post.links && post.links.map((link, key) => (
            <a target='_blank' href={link.link} key={key}>{link.text}</a>
          ))
        }
      </div>
    </section>
  )
}

export default Post