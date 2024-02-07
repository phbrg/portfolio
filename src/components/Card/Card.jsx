import './Card.css'

const Card = ({ title, date, description, tags, link }) => {
  const handleOnClick = () => {
    window.location.href = link;
  }

  return (
    <div onClick={handleOnClick} className='Card'>
      <div className="header">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <p className='description'>{description}</p>
      <div className="techs">
        {
          tags.map((skill, key) => (
            <p key={key}>{skill}</p>
          ))
        }
      </div>
    </div>
  )
}

export default Card