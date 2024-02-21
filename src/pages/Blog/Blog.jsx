import json from '../../../posts.json'

import { Header } from '../../components/Header/Header'
import { Card } from '../../components/Card/Card'

import './Blog.css'

export const Blog = () => {
  const reversedPosts = [];

  for (let i = json.posts.length - 1; i >= 0; i--) {
    reversedPosts.push(json.posts[i]);
  }

  return (
    <section className='Blog'>
      <Header title='Blog' description='Click on the post to read.'/>
      <div className="card-container">
        {
          reversedPosts.map((post) => (
            <Card 
            title={post.title} 
            date={post.date}
            description={post.description}
            tags={post.tags} 
            link={`/post/${post.id}`}
            blank={false}/>
          ))
        }
      </div>
    </section>
  )
}
