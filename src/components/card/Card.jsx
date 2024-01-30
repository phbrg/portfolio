import './Card.css'

const Card = ({ title, description, skills, link }) => {
  return (
    <a target='_blank' href={link} className='Card'>
      <h1>{title}</h1>
      <p className='description'>{description}</p>
      <div className="techs">
        {
          skills.map((skill, key) => (
            <p key={key}>{skill}</p>
          ))
        }
      </div>
    </a>
  )
}

export default Card