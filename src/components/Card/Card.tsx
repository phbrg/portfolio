import styles from './Card.module.css'

export const Card = (data: { title: string, date: string, description: string, tags: string[], link: string, blank: boolean }) => {
  return (
    <a target={data.blank ? '_blank' : '_self'} href={data.link} className={styles.Card}>
      <h1>{data.title} <span>{data.date}</span></h1>
      <h2>{data.description}</h2>
      <div className={styles.tags}>
        {
          data.tags.map((tag, key) => (
            <p className={styles.tag} key={key}><span>#</span> {tag}</p>
          ))
        }
      </div>
    </a>
  )
}
