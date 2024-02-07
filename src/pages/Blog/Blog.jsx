import json from '../../../posts.json'

import Card from '../../components/Card/Card'

import './Blog.css'

const Blog = () => {
  return (
    <section className='Blog'>
      <div className="blog-header">
        <h1>Blog</h1>
        <h2>Click on the post to see more about it.</h2>
      </div>
      {
        json.posts.map((post) => (
          <Card 
            key={post.id}
            title={post.title}
            date={post.date}
            description={post.description}
            tags={post.tags}
            link={`/post/${post.id}`}
          />
        ))
      }
    </section>
  )
}

export default Blog