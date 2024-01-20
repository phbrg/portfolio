import './AboutMe.css'

import List from '../list/List'

const AboutMe = () => {
  return (
    <div className='About'>
      <div className="presentation">
        <li>console.log('Hello world!');</li>
        <p>I am a <span>full-stack developer</span> with proficiency in both <span>backend</span> and <span>frontend</span> development. While I am adept at working in both areas, my preference leans towards <span>backend development</span>. Currently, I am broadening my horizons and stepping out of my comfort zone by delving into new technologies.</p>
      </div>
      <List title={'Knowledge'} elements={['Node.js', 'React.js', 'Jest', 'SQL', 'PostgreSQL', 'MySQL', 'SCSS']}/>
      <List title={'Links'} elements={[
      <p>Github: <a href='https://github.com/phbrg' target='_blank'>@phbrg</a></p>, 
      <p>Linkedin: <a href='https://www.linkedin.com/in/pedro-henrique-b-bergamin/' target='_blank'>@Pedro Henrique</a></p>, 
      <p>Email: <a href='mailto:pedrohenriquebatistabergamin@gmail.com'>pedrohenriquebatistabergamin@gmail.com</a></p>, 
      <p><a href='https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing' target='_blank'>Resume</a></p>
      ]}/>
    </div>
  )
}

export default AboutMe
