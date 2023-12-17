import './About.css'

const About = () => {
  return (
    <div className='About'>
      <h1 className='title'>About me</h1>
      <div className="card">
        <code><span className="blue">console</span>.<span className="purple">log</span><span className="blue">(</span><span className="green">'Hello World'</span><span className="blue">)</span>;</code>
        <p>I'm <span>Pedro Henrique</span>, a <span>17-year-old</span> from <span>São Paulo, Brazil</span>. My coding journey began approximately two years ago, initially with <span>Lua</span>, though I lacked a clear understanding of what I was doing. Soon, I discovered <span>HTML</span> and <span>CSS</span>, which piqued my interest, but I didn't fully immerse myself in them at that point; back then, I was coding just <span>for fun</span>.<br/><br/>After spending some time creating <span>static websites</span>, I realized that I could transform this <span>hobby</span> into a <span>profession</span>. I began researching what and how I could achieve that, leading me to discover <span>JavaScript</span>. It marked a turning point for me as I grasped its power. Following <span>extensive study</span>, I find myself here with <span>knowledge</span> in <span>JavaScript</span>, <span>Node.js</span>, <span>SQL</span>, <span>Sequelize</span>, <span>PostgreSQL</span>, <span>MySQL</span>, and currently, I am delving into <span>React.js</span> and <span>TypeScript</span>.</p>
      </div>
    </div>
  )
}

export default About