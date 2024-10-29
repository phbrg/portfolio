import { Card } from '../../components/Card/Card'
import { Title } from '../../components/Title/Title'
import json from '../../data/posts.json'

export const Blog = (lang: any) => {
  let posts;
  if(lang.lang == 'pt') {
    posts = json.pt
  } else {
    posts = json.eng
  }

  return (
    <main>
      <Title 
        title='Blog' 
        desc={
          lang.lang == 'pt' && <>Essa página lista os posts do meu blog. Clique no post para ler.</> || 
          <>This page lists my blog posts. Click on the post to read</>
        }
        />
      <div className='cardBox'>
        {
          posts.map((post) => (
            <Card 
              key={post.id}
              title={post.title}
              logo='blog'
              date={post.date}
              description={post.description}
              tags={post.tags}
              link={`/${lang.lang}/post/${post.id}`}
              blank={false}
            />
          ))
        }
      </div>
    </main>
  )
}
