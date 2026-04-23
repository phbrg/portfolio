import { Intro } from "../../components/Intro/Intro"
import { LinkList } from "../../components/LinkList/LinkList";

export const Projects = (language: any) => {
  const lang = language.lang;

  return (
    <main>
      <Intro
        title={lang == 'pt' ? 'Projetos' : 'Projects'}
        description={
          lang == 'pt' ?
            <>Explore alguns dos meus melhores projetos aqui. Você pode encontrar outros projetos em meu <a href="https://github.com/phbrg?tab=repositories" target="_blank">Github</a>.</> :
            <>Explore some of my best projects here. You can find others projects on my <a href="https://github.com/phbrg?tab=repositories" target="_blank">here</a>.</>
        }
        language={lang}
      />
      <LinkList
        links={[
          {
            id: 1,
            type: 'a',
            link: 'https://github.com/phbrg/sabaraapi',
            title: 'SabaraAPI',
            date: 'Jun. 2025',
            description: lang == 'pt' ? 'API que simula um sistema ERP para um hospital real, criado como um projeto da faculdade.' : 'API that simulates an ERP system for a real hospital, created as a college project.',
            tags: ['Restful API', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy']
          },
          {
            id: 2,
            type: 'a',
            link: 'https://github.com/phbrg/shift-news',
            title: 'ShiftNews',
            date: 'Jun. 2024',
            description: lang == 'pt' ? 'API Restful de um blog inspirado no Tabnews, desenvolvida no em Node.js (NestJS) com Prisma e PostgreSQL' : 'A restful blog API inspired in Tabnews, developed in Node.js (Nest), Prisma and PostgreSQL.',
            tags: ['Restful API', 'NestJs', 'Prisma', 'PostgreSQL', 'TypeScript']
          },
          {
            id: 3,
            type: 'a',
            link: 'https://github.com/phbrg/arkadius',
            title: 'Arkadius',
            date: lang == 'pt' ? 'Out. 2023' : 'Oct. 2023',
            description: lang == 'pt' ? 'Rede social com criação, personalização e compartilhamento de perfil.' : 'Social Media Platform with Personal Profile, Profile Customization and Share Link on Profile.',
            tags: ['MVC', 'Node.js', 'Sequelize.js', 'PostgreSQL', 'JavaScript']
          },
          {
            id: 4,
            type: 'a',
            link: 'https://github.com/phbrg/cashflow',
            title: 'Cashflow',
            date: 'Nov. 2023',
            description: lang == 'pt' ? 'Aplicação de gestão financeira para gerir o seu dinheiro e receber conselhos de investimento.' : 'Financial Management App to Manage Your Money and Receive Investment Advice.',
            tags: ['MVC', 'Node.js', 'Sequelize.js', 'PostgreSQL', 'JavaScript']
          },
        ]}
      />
    </main>
  )
}
