import './Card.css'

export const Card = ({ title, date, description, tags, link, blank }) => {
  return (
    <a target={blank ? '_blank' : '_self'} href={link} className='Card'>
      <h1>{title} <span>{date}</span></h1>
      <h2>{description}</h2>
      <div className="tags">
        {
          tags.map((tag, key) => (
            <p className='tag' key={key}>{tag}</p>
          ))
        }
      </div>
    </a>
  )
}
