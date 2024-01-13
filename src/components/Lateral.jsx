import me from '../assets/me.jfif'

import './Lateral.css'

const Lateral = () => {
  return (
    <div className="Lateral">
      <div className="presentation">
        <img src={me} alt="me" />
        <ul>
          <li><h1>@Pedro Henrique</h1></li>
          <li><h2>- Backend web developer</h2></li>
        </ul>
      </div>
      <h1 className='about-me'>I'm currently on road to becoming a fullstack developer.<br/> Skills: <span>Javascript</span>, <span>SQL</span>, <span>Node.js</span>, <span>React.js</span> and much more.</h1>
      <div className="social">
        <h1>Personal links</h1>
        <div>
          <a href="https://github.com/phbrg" target='_blank'><i class="fa-brands fa-github"></i> Github</a>
          <a href="https://www.linkedin.com/in/pedro-henrique-b-bergamin/" target='_blank'><i class="fa-brands fa-linkedin"></i> Linkedin</a>
          <a href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing" target='_blank'><i class="fa-solid fa-file-arrow-down"></i> Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Lateral