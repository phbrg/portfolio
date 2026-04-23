import json from '../../assets/posts.json'

import { useParams } from 'react-router-dom';
import { Intro } from '../../components/Intro/Intro';

export const Post = (language: any) => {
  const lang = language.lang;
  const { postId } = useParams();
  let post;

  if(lang == 'pt') {
    post = json.pt.find((p) => p.id === Number(postId));
  } else {
    post = json.eng.find((p) => p.id === Number(postId));
  }

  if(!post) {
    window.location.href = `/${lang}/error`;
  }

  return (
    <main>
      {
        post &&
        <Intro 
          title={post?.title}
          description={
            post.body.map((item) => (
              <>{item} <br/><br/></>
            ))
          }
          language={lang}
        />
      }
    </main>
  )
}
