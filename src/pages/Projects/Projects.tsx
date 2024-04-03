import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'

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

  const projects = [
    {
      id: 1,
      title: 'Shift News',
      date: 'March, 2024 - Present',
      descriptioneng: '💻 Nest API that copies tab news/dev.to, where users can create and interact with posts.',
      descriptionpt: '💻 API em Nest que copia o tab news/dev.to, onde os usuarios podem criar e interagir com posts.',
      tags: ['Nest', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'JWT'],
      link: 'https://github.com/phbrg/shift-news'
    },
    {
      id: 2,
      title: 'Market Manager',
      date: 'Jan, 2024 - Discontinued',
      descriptioneng: '📊 Node.js and React.js Business Manager with an Interactive Dashboard with Graphs and Management Systems.',
      descriptionpt: '📊 Gerenciador de empresas com uma dashboard interativa, com graficos e sistemas de gerencia em Node.js e React.js.',
      tags: ['Node.js', 'React.js', 'PostgreSQL', 'Sequelize.js', 'JWT'],
      link: 'https://github.com/phbrg/market-manager'
    },
    {
      id: 3,
      title: 'Restaurant Orders',
      date: 'Nov, 2023 - Discontinued',
      descriptioneng: '🍔 Node.js and Angular Restaurant Food Order Web App with an Interactive Menu and Dashboard.',
      descriptionpt: '🍔 Sistema de pedidos de restaurante com uma dashboard e menu interativo em Node.js e Angular .',
      tags: ['Node.js', 'Angular', 'PostgreSQL', 'Sequelize.js', 'JWT'],
      link: 'https://github.com/phbrg/restaurant-order'
    },
    {
      id: 4,
      title: 'Wordle',
      date: 'Dec, 2023 - Dec, 2023',
      descriptioneng: '🧶 A React.js game where users have to guess the word by the letter.',
      descriptionpt: '🧶 Um jogo onde os usuarios tem de adivinhar a palavra pela letra em React.js.',
      tags: ['React.js'],
      link: 'https://github.com/phbrg/wordle-react'
    },
    {
      id: 5,
      title: 'Arkadius',
      date: 'Oct, 2023 - Oct, 2023',
      descriptioneng: '📸 Node.js Social Media Platform with Personal Profile, Profile Customization and Share Link on Profile.',
      descriptionpt: '📸 Rede social com perfil pessoal, customização de perfil e compartilhamento de links em Node.js.',
      tags: ['Node.js', 'Handlebars', 'PostgreSQL', 'Sequelize.js'],
      link: 'https://github.com/phbrg/arkadius'
    },
    {
      id: 6,
      title: 'Cashflow',
      date: 'Nov, 2023 - Nov, 2023',
      descriptioneng: '💰 Node.js Financial Management App to Manage Your Money and Receive Investment Advice.',
      descriptionpt: '💰 Aplicação de gerencia financeira em Node.js.',
      tags: ['Node.js', 'Handlebars', 'PostgreSQL', 'Sequelize.js'],
      link: 'https://github.com/phbrg/cashflow'
    },
  ]

  return (
    <section className={styles.Projects}>
      { userLang == 'eng' && <Header title='Projects' description='_Click on the project to see more about it.'/> }
      { userLang == 'pt' && <Header title='Projetos' description='_Clique no projeto para ver mais sobre.'/> }
      <div className='cardContainer'>
        { userLang == 'eng' && 
          projects && projects.map((project) => (
            <Card key={project.id} title={project.title} date={project.date} description={project.descriptioneng} tags={project.tags} link={project.link} blank={true}/>
          ))
        }
        { userLang == 'pt' && 
          projects && projects.map((project) => (
            <Card key={project.id} title={project.title} date={project.date} description={project.descriptionpt} tags={project.tags} link={project.link} blank={true}/>
          ))
        }
      </div>
      { userLang == 'eng' && <h3 className={styles.otherProjects}>You can find more of my projects <a target='_blank' href="https://github.com/phbrg?tab=repositories">here</a></h3> }
      { userLang == 'pt' && <h3 className={styles.otherProjects}>Você pode achar mais de meus projetos <a target='_blank' href="https://github.com/phbrg?tab=repositories">aqui</a></h3> }
    </section>
  )
}
