import List from '../../components/List/List'

import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="about-me">
        <h1>Hello World! <span>👋</span></h1>
        <p>I am a <span>full stack developer</span>, specializing in <span>back-end development</span> with <span>Node.js</span>. Currently, I am expanding my skills by studying <span>C# .NET</span>.</p>
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