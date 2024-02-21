import { Card } from '../../components/Card/Card'

import './Projects.css'

export const Projects = () => {
  return (
    <section className='Projects'>
      <header>
        <h1>Projects</h1>
        <h2>Click on the project name to see more abot it.</h2>
      </header>
      <div className="card-container">
        <Card title='Market Manager' date='Jan, 2024 - Present' description='An node.js market ( shop/store ) manager, with an interactive dashboard and many functions.' tags={['Node.js', 'React.js', 'PostgreSQL']} link='https://github.com/phbrg/market-manager' blank={true}/>
        <Card title='Restaurant Manager' date='Nov, 2023 - Present' description='A restaurant management web application focused on facilitating customer orders and restaurant organization.' tags={['Node.js', 'Angular', 'PostgreSQL']} link='https://github.com/phbrg/restaurant-manager' blank={true}/>
        <Card title='Wordle' date='Dec, 2023 - Dec, 2023' description='A game where the user needs to guess the word by guessing the letters, it was my first project using React.js.' tags={['React.js']} link='https://github.com/phbrg/wordle-react' blank={true}/>
        <Card title='Arkadius' date='Oct, 2023 - Oct, 2023' description='Arkadius is a social network for users to create and customize profiles as they wish, with the ability to modify content and add links.' tags={['Node.js', 'Handlebars', 'PostgreSQL']} link='https://github.com/phbrg/arkadius' blank={true}/>
        <Card title='Cashflow' date='Nov, 2023 - Nov, 2023' description='Cashflow is a financial management app where users manage their money and receive investment advice. It was part of a school competition.' tags={['Node.js', 'Handlebars', 'PostgreSQL']} link='https://github.com/phbrg/cashflow' blank={true}/>
      </div>
      <h3 className='other-projects'>You can find more of my projects <a target='_blank' href="https://github.com/phbrg?tab=repositories">here</a></h3>
    </section>
  )
}
