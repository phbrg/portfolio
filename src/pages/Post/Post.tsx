import s from './Post.module.css'
import json from '../../data/posts.json'
import { useParams } from 'react-router-dom';

export const Post = (lang: any) => {
  const { postId } = useParams();
  let post;
  if(lang.lang == 'pt') {
    post = json.pt.find((p) => p.id === Number(postId));
  } else {
    post = json.eng.find((p) => p.id === Number(postId));
  }

  if(!post) {
    window.location.href = `/${lang.lang}/error`;
  }

  return (
    <main className={s.Post}>
      <header>
        <h1>{post?.title}</h1>
        <p>{post?.date}</p>
      </header>
      <p className={s.body}>
        {
          post?.body.map((paragraph) => (
            <>{paragraph} <br /><br /></>
          ))
        }
      </p>
      {/* todo: make links and image work */}
    </main>
  )
}
