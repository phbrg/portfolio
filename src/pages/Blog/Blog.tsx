import json from '../../data/posts.json'

import { Header } from '../../components/Header/Header'
import { Card } from '../../components/Card/Card'

import styles from './Blog.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Blog = () => {
  let { lang } = useParams();
  if(!lang || lang.toLocaleLowerCase() !== 'eng' && lang.toLocaleLowerCase() !== 'pt') window.location.href = '/pt'

  const [userLang, setUserLang] = useState('');
  useEffect(() => {
    if(!userLang && lang) {
      setUserLang(lang.toLocaleLowerCase());
    }
  }, [lang, userLang])

  let posts;
  if(lang == 'eng') posts = json.eng;
  if(lang == 'pt') posts = json.pt;

  return (
    <section className={styles.Blog}>
      <Header 
        title='Blog' 
        description={userLang == 'eng' && '_Click on the post to read.' || userLang == 'pt' && '_Clique no post para ler.'}
      />
      <div className="cardContainer">
        {
          posts && posts.map((post, key) => (
            <Card 
            key={key}
            title={post.title} 
            date={post.date}
            description={post.description}
            tags={post.tags} 
            link={`/${userLang}/post/${post.id}`}
            blank={false}/>
          ))
        }
      </div>
    </section>
  )
}
