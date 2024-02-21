import './Header.css'

export const Header = ({ title, description }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </header>
  )
}
