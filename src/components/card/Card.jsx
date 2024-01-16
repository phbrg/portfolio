import './Card.css'

const Card = ({ name, description, techs, source, deploy = null }) => {
  return (
    <div className='Card'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <div className="techs">
        {
          techs.map((tech, key) => (
            <p key={key}>{tech}</p>
          ))
        }
      </div>
      <a href={source} target='_blank'>View source code</a>
    </div>
  )
}

export default Card