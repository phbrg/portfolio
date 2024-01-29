import './List.css'

const List = ({ title = null, elements }) => {

  const handleHover = () => {
    const isActive = document.querySelector('.list-active') || null;
    
    if(!isActive) {
      const elements = Array.from(document.getElementsByClassName('not-active'));
      for(let element of elements) {
        element.setAttribute('class', 'list-active');
      }
    }
  }

  return (
    <div onMouseEnter={handleHover} className='List'>
      {
        title && <h1>{title}</h1>
      }
      <ul>
      {
        elements.map((element, key) => (
          <li className='not-active' key={key}>{element}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default List