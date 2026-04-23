import s from './Home.module.css'

import { FiUser, FiPhoneCall, FiFile, FiBox } from "react-icons/fi";

import { Button } from '../../components/Button/Button'

export const Home = (language: any) => {
  const lang = language.lang
  return (
    <main className={s.Home}>
      <div className={s.textsWrapper}>
        <h1>Pedro H. Bergamin</h1>
        <h2>{
          lang == 'eng' ? 
          <>SAP ABAP assistant @Cognizant & Software Engineering Student @FIAP</> :
          <>Assistente SAP ABAP @Cognizant & Estudante de Engenharia de Software @FIAP</>
        }</h2>
      </div>
      <div className={s.buttonsWrapper}>
        <Button 
          style='big' 
          title={
            lang == 'eng' ? 'About me'  : 'Sobre mim'
          } 
          description={
            lang == 'eng' ? 'Find out more about me and my career.'  : 'Descubra mais sobre mim e minha carreira.'
          }
          icon={<FiUser />}
          linkIcon='arrow'
          link='about' 
          redirect={false} 
        />
        <div className={s.smallButtons}>
          <Button 
            style='small' 
            title={
              lang == 'eng' ? 'Projects'  : 'Projetos'
            }  
            description={
              lang == 'eng' ? 'Explore some of my best projects.'   : 'Explore alguns dos meus melhores projetos.'
            } 
            icon={<FiBox />}
            linkIcon='arrow'
            link='projects' 
            redirect={false} 
          />
          <Button 
            style='small' 
            title='Blog' 
            description={
              lang == 'eng' ? 'Read posts about my career and technology.' : 'Leia posts sobre minha carreira e tecnologia.'
            }
            icon={<FiFile />}
            linkIcon='arrow'
            link='blog' 
            redirect={false} 
          />
          <Button 
            style='small' 
            title={
              lang == 'eng' ? 'Contact' : 'Contato'
            }
            description={
              lang == 'eng' ? 'Get in touch with me.' : 'Entre em contato comigo.'
            }
            icon={<FiPhoneCall />}
            linkIcon='arrow'
            link='contact' 
            redirect={false} 
          />
        </div>
      </div>
    </main>
  )
}
