import json from '../../../posts.json'

import Card from '../../components/Card/Card'

import './Blog.css'

const Blog = () => {
  const reversedPosts = [];

  for (let i = json.posts.length - 1; i >= 0; i--) {
    reversedPosts.push(json.posts[i]);
  }

  return (
    <section className='Blog'>
      <div className="blog-header">
        <h1>Blog</h1>
        <h2>Click on the post to see more about it.</h2>
      </div>
      {
        reversedPosts.map((post) => (
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