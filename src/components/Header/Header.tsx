import s from './Header.module.css'

export const Header = (language: any) => {
  const lang = language.lang
  return (
    <header className={s.Header}>
      <a href={
        lang == 'pt' ? '/eng' : '/pt'
      }>{
        lang == 'pt' ? <>en-US</> : <>pt-BR</>
      }</a>
    </header>
  )
}
