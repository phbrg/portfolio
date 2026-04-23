import s from './Contact.module.css'

import { Intro } from "../../components/Intro/Intro"
import { Button } from '../../components/Button/Button';

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export const Contact = (language: any) => {
  const lang = language.lang;
  return (
    <main className={s.Contact}>
      <Intro
        title={
          lang == 'pt' ? 'Contato' : 'Contact'
        }
        description={
          lang == 'pt' ? 'Entre em contacto comigo e acesse todos os meus links.' : 'Get in touch with me and access all my links.'
        }
        language={lang}
      />
      <div className={s.btnWrapper}>
        <Button 
          title='Linkedin'
          description={lang == 'pt' ? 'Se conecte comigo no meu LinkedIn.' : 'Connect with me on my LinkedIn.'}
          style='link'
          linkIcon='link'
          icon={<FiLinkedin />}
          link='https://www.linkedin.com/in/pedro-henrique-b-bergamin/'
          redirect={true}
        />
        <Button 
          title='Github'
          description={lang == 'pt' ? 'Me siga no Github.' : 'Follow me on Github.'}
          style='link'
          linkIcon='link'
          icon={<FiGithub />}
          link='https://github.com/phbrg'
          redirect={true}
        />
        <Button 
          title={lang == 'pt' ? 'Currículo' : 'Resume'}
          description={lang == 'pt' ? 'Acesse o meu currículo.' : 'Access my resume.'}
          style='link'
          linkIcon='link'
          icon={<FiFile />}
          link={
            lang == 'pt' ? 'https://docs.google.com/document/d/1VjwgN47X7yN2JsFqs6ubgZW4ujZw1FlYHNaBTkr-No0/edit?usp=sharing' : 'https://docs.google.com/document/d/1aVV1x9CODxOPlFv7auVmbeONCuJe41ZmMJuVrC0MMdk/edit?usp=sharing'
          }
          redirect={true}
        />
        <Button 
          title='Email'
          description={lang == 'pt' ? 'Me envie um email.' : 'Send an Email to me.'}
          style='link'
          linkIcon='link'
          icon={<FiMail />}
          link='mailto:pedrohenriquebatistabergamin@gmail.com'
          redirect={true}
        />
      </div>
    </main>
  )
}
