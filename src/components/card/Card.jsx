import './Card.css'

const Card = ({ name, description, techs, source, deploy = null }) => {
  return (
    <a target='_blank' href={source} className='Card'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <div className="techs">
        {
          techs.map((tech, key) => (
            <p key={key}>{tech}</p>
          ))
        }
      </div>
    </a>
  )
}

export default Card