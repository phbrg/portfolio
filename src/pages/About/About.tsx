import s from './About.module.css'

import { Intro } from '../../components/Intro/Intro';
import { Career } from '../../components/CareerCard/Career';

export const About = (language: any) => {
  const lang = language.lang;
  return (
    <main className={s.About}>
      <Intro
        title={
            lang == 'eng' ? 'About me' : 'Sobre mim'
          }
        description={
          lang == 'eng' ? 
          <>I’m a FullStack Developer passionate about technology and programming. I really like the Node.js ecosystem, especially technologies such as React.js and NestJS. Despite this, I venture into other technologies, mainly at college, where I develop projects mainly in Java and Python for backend and data analysis.<br/><br/>I am currently starting a new position as a SAP ABAP assistant at Cognizant, a new experience where I look forward to learning a lot.</> : 
          <>Sou um Desenvolvedor FullStack apaixonado por tecnologia e programação. Gosto muito do ecossistema Node.js, com foco especial em tecnologias como React.js e NestJS. Além disso, costumo me aventurar em outras ferramentas, principalmente na faculdade, onde desenvolvo projetos principalmente em Java e Python voltados para backend e análise de dados.<br/><br/>Atualmente, estou iniciando em um novo cargo de Assistente SAP ABAP na Cognizant, uma nova experiência onde pretendo aprender muito.</>
        }
        language={lang}
      />
      <Career
        roles={[
          {
            id: 1,
            title: lang == 'pt' ? 'Assistente SAP ABAP Júnior' : 'SAP ABAP assistant',
            company: 'Cognizant',
            date: lang == 'pt' ? 'Abr. 2026 - Presente' : 'Apr. 2026 - Current',
          },
          {
            id: 2,
            title: lang == 'pt' ? 'Aprendiz em Desenvolvimento & Suporte Técnico' : 'Apprentice Developer & Technical Support',
            company: 'Cognizant',
            date:  lang == 'pt' ? 'Nov. 2024 - Fev. 2026' : 'Nov. 2024 - Feb. 2026',
            bulletPoints: [
              <><span>{lang == 'pt' ? 'Desenvolvimento com Power Platform' : 'Power Platform Development'}: </span>{lang == 'pt' ? 'Desenvolvi soluções e novas funções usando Power Apps e Power Automate. O objetivo era simplificar processos e deixar a experiência do usuário mais rápida e eficiente.' : 'I developed custom solutions and new features using Power Apps and Power Automate. My goal was to simplify internal processes and improve the user experience.'}</>,
              <><span>{lang == 'pt' ? 'Suporte LATAM em Espanhol' : 'LATAM Support (Spanish)'}: </span>{lang == 'pt' ? 'Fui responsável pelo suporte técnico especializado para a América Latina, atendendo em espanhol e gerenciando todos os chamados e incidentes através do ServiceNow.' : 'I was responsible for specialized technical support across Latin America, working in Spanish and managing all incidents and requests through ServiceNow.'}</>,
              <><span>{lang == 'pt' ? 'Segurança e Automação' : 'Security and Automation'}: </span>{lang == 'pt' ? 'Ajudei a melhorar a segurança dos dados criando fluxos automáticos para gerenciar acessos e inativar usuários, garantindo que os processos seguissem as normas de compliance da empresa.' : 'I helped improve data security by creating automated workflows for access management and user deactivation, making sure everything followed company compliance standards.'}</>,
            ]
          }
        ]}
        language={lang}
      />
    </main>
  )
}
