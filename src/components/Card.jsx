import './Card.css'

const Card = ({ title, description, source, deploy = null, skills }) => {
  return (
    <a href={source} target='_blank' className='Card'>
      <h1>phbrg/{title}</h1>
      <h2>- {description}</h2>
      <div className="row">
        {
          skills.map((skill) => (
            <p className='skill'>{skill.icon} {skill.name}</p>
          ))
        }
      </div>
      <div className="row">
        <a className='link' href={source} target='_blank'>View source</a>
        {
          deploy && <a className='link' href={deploy} target='_blank'>View deploy</a>
        }
      </div>
    </a>
  )
}

export default Card