import './List.css'

const List = ({ title = null, elements }) => {
  return (
    <div className='List'>
      {
        title && <h1>{title}</h1>
      }
      <ul>
      {
        elements.map((element, key) => (
          <li key={key}>{element}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default List