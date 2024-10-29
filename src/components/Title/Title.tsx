import s from './Title.module.css'

export const Title = (data: { title: string, desc: any }) => {
  return (
    <div className={s.Title}>
      <h1>{data.title}</h1>
      <h2>{data.desc}</h2>
    </div>
  )
}
