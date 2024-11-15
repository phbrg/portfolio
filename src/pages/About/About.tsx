import { Card } from '../../components/Card/Card'

import s from './About.module.css'

export const About = (lang: any) => {
  return (
    <main className={s.About}>
        <div className={s.main}>
          <div>
            <h3 className={s.intro}>{lang.lang == 'pt' ? 'INTRODUÇÃO' : 'INTRODUCTION'}</h3>
            <h1>{
              lang.lang == 'pt' ?
              <>Eu sou o <span>Pedro Henrique</span>, um estudante de <span>Engenharia de Software</span> na <span>FIAP</span>, <span>Jovem Aprendiz</span> na <span>Cognizant</span> e <span>Desenvolvedor FullStack</span> apaixonado por tecnologia.</> :
              <>I'm <span>Pedro Henrique</span>, a <span>Software Engineering Student</span> at <span>FIAP</span>, <span>Intern</span> at <span>Cognizant</span> and a <span>FullStack Developer</span> passionate about technology.</>  
            }</h1>
          </div>
          <h2>{
            lang.lang == 'pt' ?
            <>Com aproximadamente <span>1 ano e meio</span> de experiência prática em programação, participei de diversos projetos e explorei uma variedade de tecnologias, incluindo <span>Nest</span>, <span>React.js</span>, <span>Prisma ORM</span>, <span>Type ORM</span>, <span>MySQL</span>, <span>PostgreSQL</span>, <span>JavaScript</span>, <span>TypeScript</span> e <span>Python</span>. Estou sempre em busca de novos desafios para evoluir e trazer soluções práticas aos projetos em que atuo.</> :
            <>With approximately a year and a half of hands-on programming experience, I've worked on various projects and explored a wide range of technologies, including <span>Nest</span>, <span>React.js</span>, <span>Prisma ORM</span>, <span>Type ORM</span>, <span>MySQL</span>, <span>PostgreSQL</span>, <span>JavaScript</span>, <span>TypeScript</span> e <span>Python</span>. I’m always seeking new challenges to grow and bring practical solutions to the projects I work on.</>  
          }</h2>
        </div>
        <div className='cardBox'>
          <h3 className={s.intro}>{lang.lang == 'pt' ? 'CARREIRA' : 'CARRER'}</h3>
            <Card 
                key='1'
                title={lang.lang == 'pt' ? 'Jovem Aprendiz, Cognizant' : 'Intern, Cognizant'}
                logo='job'
                date={lang.lang == 'pt' ? 'Nov, 2024 - Presente' : 'Nov, 2024 - Present'} 
                description={lang.lang == 'pt' ? 'Technical support na Cognizant, São Paulo' : 'Technical support at Cognizant, São Paulo'} 
                tags={['']}
                link='https://www.cognizant.com/us/en'
                blank={true}
              />
        </div>
    </main>
  )
}
