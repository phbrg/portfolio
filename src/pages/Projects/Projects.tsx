import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'

import json from '../../data/projects.json'

import styles from './Projects.module.css'

export const Projects = () => {
  let { lang } = useParams();
  if(!lang || lang.toLocaleLowerCase() !== 'eng' && lang.toLocaleLowerCase() !== 'pt') window.location.href = '/pt'

  const [userLang, setUserLang] = useState('');
  useEffect(() => {
    if(!userLang && lang) {
      setUserLang(lang.toLocaleLowerCase());
    }
  }, [lang, userLang])

  return (
    <section className={`def ${styles.Projects}`}>
      <Header 
        title={userLang == 'eng' && 'Projetcs' || userLang == 'pt' && 'Projetos'} 
        description={userLang == 'eng' && '_Click on the project to see more about it.' || userLang == 'pt' && '_Clique no projeto para ver mais sobre.'} 
      />
      <div className='cardcontainer'>
        { 
          json.projects && json.projects.map((project) => (
            <Card 
              key={project.id} 
              title={project.title} 
              date={project.date} 
              description={userLang == 'eng' && project.descriptioneng || project.descriptionpt} 
              tags={project.tags} link={project.link} blank={true}
            />
          ))
        }
      </div>
      <h3 className={styles.otherProjects}>
        { 
          userLang == 'eng' && <>You can find more of my projects <a target='_blank' href="https://github.com/phbrg?tab=repositories">here</a></> || 
          userLang == 'pt' && <>Você pode achar mais de meus projetos <a target='_blank' href="https://github.com/phbrg?tab=repositories">aqui</a></>
        }
      </h3>
    </section>
  )
}
