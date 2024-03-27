import json from '../../../posts.json'

import { Header } from '../../components/Header/Header'
import { Card } from '../../components/Card/Card'

import styles from './Blog.module.css'

export const Blog = () => {
  const reversedPosts = [];

  for (let i = json.posts.length - 1; i >= 0; i--) {
    reversedPosts.push(json.posts[i]);
  }

  return (
    <section className={styles.Blog}>
      <Header title='Blog' description='_Click on the post to read.'/>
      <div className="cardContainer">
        {
          reversedPosts.map((post, key) => (
            <Card 
            key={key}
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
