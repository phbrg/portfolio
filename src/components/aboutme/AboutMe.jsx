import './AboutMe.css'

import List from '../list/List'

const AboutMe = () => {
  
  const handleHover = () => {
    const isActive = document.querySelector('.p-active') || null;

    if(!isActive) {
      const blue = document.querySelector('.first');
      const purple = document.querySelector('.second');
      const yellow1 = document.querySelector('.third');
      const green = document.querySelector('.fourth');
      const yellow2 = document.querySelector('.fifth');

      const paragraph = document.querySelector('.p-before');
      const spanElements = paragraph.children;

      blue.setAttribute('class', 'blue');
      purple.setAttribute('class', 'purple');
      yellow1.setAttribute('class', 'yellow');
      yellow2.setAttribute('class', 'yellow');
      green.setAttribute('class', 'green');

      paragraph.setAttribute('class', 'p-active');
      
      for(let span of spanElements) {
        span.setAttribute('class', 'span-active');
      }
    }
  }

  return (
    <div className='About'>
      <div onMouseEnter={handleHover} className="presentation">
        <h1><span className="first">console</span><span className="second">.log</span><span className="third">(</span><span className='fourth'>'Hello world!'</span><span className="fifth">)</span>;</h1>
        <p className="p-before">I am a <span>full-stack developer</span> with proficiency in both <span>back-end</span> and <span>front-end</span> development. While I am adept at working in both areas, my preference leans towards <span>back-end development</span>. Currently, I am broadening my horizons and stepping out of my comfort zone by studying <span>C#</span>.</p>
      </div>
      <List title={'Knowledge'} elements={['Node.js', 'React.js', 'SQL', 'PostgreSQL', 'MySQL']}/>
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
