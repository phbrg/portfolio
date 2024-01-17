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
      <div className="links">
        <a href={source} target='_blank'>View source code <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        {
          deploy && <a href={deploy} target='_blank'>View deploy <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        }
      </div>
    </div>
  )
}

export default Card