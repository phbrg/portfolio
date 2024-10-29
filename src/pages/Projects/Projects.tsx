import { Card } from '../../components/Card/Card'
import { Title } from '../../components/Title/Title'
import json from '../../data/projects.json'

export const Projects = (lang: any) => {
  return (
    <main>
      <Title 
        title={lang.lang == 'pt' && 'Projetos' || 'Projects'} 
        desc={
          lang.lang == 'pt' && <>Essa página lista os <span>{json.length}</span> principais projetos que venho desenvolvendo durante a minha jornada como programador. <a href="https://github.com/phbrg?tab=repositories" target='_blank'>Confira outros projetos em meu GitHub.</a></> || 
          <>This page lists the <span>{json.length}</span> main projects I have been developing during my journey as a programmer. <a href="https://github.com/phbrg?tab=repositories" target='_blank'>Check out other projects on my GitHub.</a>.</>
        }
        />
      <div className='cardBox'>
        {
          json.map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              logo={project.logo} 
              date={lang.lang == 'pt' && project.datePt || project.dateEng} 
              description={lang.lang == 'pt' && project.descPt || project.descEng} 
              tags={project.tags} link={project.link} blank={true}
            />
          ))
        }
      </div>
    </main>
  )
}
