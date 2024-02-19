import me from '../../assets/me.jfif'

import List from '../../components/List/List'

import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <header>
        <div className="row">
          <img src={me} alt="me" />
          <div className="texts">
            <h1>Pedro Henrique</h1>
            <h2>_FullStack Developer</h2>
          </div>
          <div className="links">
            <a href="https://github.com/phbrg" target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing" target='_blank'><i className="fa-solid fa-file"></i></a>
          </div>
        </div>
        <p>I am a <span>Full Stack Developer</span>, specializing in <span>Back-End Development</span> with <span>Node.js</span>. Currently, I am expanding my skills by studying <span>C# & .NET</span>.</p>
      </header>
      <List title='Knowledge' elements={[
        'Node.js', 
        'React.js', 
        'SQL', 
        'PostgreSQL', 
        'MySQL',
        ]} />
    </div>
  )
}

export default Home