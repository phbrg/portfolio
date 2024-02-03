import Card from '../../components/Card/Card'

import './Projects.css'

const Projects = () => {
  return (
    <div className='Projects'>
      <div className="project-header">
        <h1>Projects</h1>
        <h2>Click on the project to see more about it.</h2>
      </div>
      <Card title='Market Manager' description='An node.js market ( shop/store ) manager, with an interactive dashboard and many functions.' skills={['Node.js', 'React.js', 'PostgreSQL']} link='https://github.com/phbrg/market-manager'/>
      <Card title='Restaurant Manager' description='A restaurant management web application focused on facilitating customer orders and restaurant organization.' skills={['Node.js', 'Angular', 'PostgreSQL']} link='https://github.com/phbrg/restaurant-manager'/>
      <Card title='Wordle' description='Guess the word by letter game made with React.js, my first React.js project.' skills={['React.js']} link='https://github.com/phbrg/wordle-react'/>
      <Card title='Arkadius' description='Arkadius is a social network for users to create and customize profiles as they wish, with the ability to modify content and add links.' skills={['Node.js', 'Handlebars', 'PostgreSQL']} link='https://github.com/phbrg/arkadius'/>
      <Card title='Cashflow' description='Cashflow is a financial management app where users manage their money and receive investment advice. It was part of a school competition.' skills={['Node.js', 'Handlebars', 'PostgreSQL']} link='https://github.com/phbrg/cashflow'/>
      <h3 className='other-projects'>You can find more of my projects <a target='_blank' href="https://github.com/phbrg?tab=repositories">here</a></h3>
    </div>
  )
}

export default Projects