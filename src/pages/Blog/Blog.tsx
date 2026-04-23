import json from '../../assets/posts.json'

import { Intro } from "../../components/Intro/Intro";
import { LinkList } from "../../components/LinkList/LinkList";

export const Blog = (language: any) => {
  const lang = language.lang;
  let posts = lang == 'pt' ? json.pt : json.eng;
  posts = [...posts].reverse();

  return (
    <main>
      <Intro
        title='Blog'
        description={
          lang == 'pt' ? 'Leia os posts sobre a minha vida, carreira e tecnologia.' : 'Read posts about my life, career and technology.'
        }
        language={lang}
      />
      <LinkList
        links={
          posts.map((post) => (
            {
              id: post.id,
              type: 'NavLink',
              link: `/${lang}/post/${post.id}`,
              title: post.title,
              date: post.date,
              description: post.description
            }
          ))
        }
      />
    </main>
  )
}
