import List from '../../components/List/List'

import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="about-me">
        <h1><span className="blue">console</span><span className="purple">.log</span><span className="yellow">(</span><span className="green">'Hello World!'</span><span className="yellow">)</span>;</h1>
        <p>&ensp;I am a <span>full-stack developer</span> with proficiency in both <span>back-end</span> and <span>front-end development</span>. While I am adept at working in both areas, my preference leans towards <span>back-end development</span>. Currently, I am broadening my horizons and stepping out of my comfort zone by studying <span>C#</span>.</p>
      </div>
      <List title='Knowledge' elements={[
        'Node.js', 
        'React.js', 
        'SQL', 
        'PostgreSQL', 
        'MySQL',
        ]} />
      <List title='Links' elements={[
        <p><a target='_blank' href="https://github.com/phbrg">phbrg</a> - Github</p>,
        <p><a target='_blank' href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/">Pedro Henrique B Bergamin</a> - Linkedin</p>,
        <p><a target='_blank' href="mailto:pedrohenriquebatistabergamin@gmail.com">pedrohenriquebatistabergamin@gmail.com</a> - Email</p>,
        <p><a target='_blank' href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing">Link</a> - Resume</p>,
      ]} />
    </div>
  )
}

export default Home