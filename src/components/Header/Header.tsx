import styles from './Header.module.css'

export const Header = (data: { title: string, description: string }) => {
  return (
    <header className={styles.Header}>
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>
    </header>
  )
}
