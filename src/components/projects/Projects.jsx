import './Projects.css'

import Card from '../card/Card'

const Projects = () => {
  return (
    <div className='Projects'>
      <h1 className='project-title'>Projects</h1>
      <Card 
        name='Market manager' 
        description='- An node.js market ( shop/store ) manager, with an interactive dashboard and many functions.' 
        techs={['Node.js', 'React.js', 'PostgreSQL']} 
        source='https://github.com/phbrg/market-manager'
      />
      <Card 
        name='Restaurant manager' 
        description='- A restaurant management web application focused on facilitating customer orders and restaurant organization.' 
        techs={['Node.js', 'Angular', 'PostgreSQL']} 
        source='https://github.com/phbrg/restaurant-manager'
      />
      <Card 
        name='Wordle' 
        description='- Guess the word by letters game made with react.js, my first React.js project.' 
        techs={['React.js']} 
        source='https://github.com/phbrg/wordle-react'
        deploy='https://ph-wordle.vercel.app/'
      />
      <Card 
        name='Arkadius' 
        description='- Arkadius is a social network for users to create and customize profiles as they wish, with the ability to modify content and add links.' 
        techs={['Node.js', 'Handlebars', 'PostgreSQL']} 
        source='https://github.com/phbrg/arkadius'
      />
      <Card 
        name='Cashflow' 
        description='- Cashflow is a financial management app where users manage their money and receive investment advice. It was part of a school competition.' 
        techs={['Node.js', 'Handlebars', 'PostgreSQL']} 
        source='https://github.com/phbrg/cashflow'
      />
      <h2 className='project-subtitle'>You can find more of my projects <a href="https://github.com/phbrg?tab=repositories" target='_blank'>here</a></h2>
    </div>
  )
}

export default Projects