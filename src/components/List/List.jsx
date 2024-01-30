import './List.css'

const List = ({ type, title, elements }) => {
  return (
    <div className='List'>
      <h1>{title}</h1>
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