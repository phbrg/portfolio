import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'

import './Projects.css'

export const Projects = () => {
  return (
    <section className='Projects'>
      <Header title='Projects' description='Click on the project to see more about it.'/>
      <div className="card-container">
        <Card title='Market Manager' date='Jan, 2024 - Present' description='📊 Node.js and React.js Business Manager with an Interactive Dashboard with Graphs and Management Systems.' tags={['Node.js', 'React.js', 'PostgreSQL']} link='https://github.com/phbrg/market-manager' blank={true}/>
        <Card title='Restaurant Orders' date='Nov, 2023 - Present' description='🍔 Node.js and Angular Restaurant Food Order Web App with an Interactive Menu and Dashboard.' tags={['Node.js', 'Angular', 'PostgreSQL']} link='https://github.com/phbrg/restaurant-order' blank={true}/>
        <Card title='Wordle' date='Dec, 2023 - Dec, 2023' description='🧶 Wordle: A React.js game where users have to guess the word by the letter.' tags={['React.js']} link='https://github.com/phbrg/wordle-react' blank={true}/>
        <Card title='Arkadius' date='Oct, 2023 - Oct, 2023' description='📸Node.js Social Media Platform with Personal Profile, Profile Customization and Share Link on Profile.' tags={['Node.js', 'Handlebars', 'PostgreSQL']} link='https://github.com/phbrg/arkadius' blank={true}/>
        <Card title='Cashflow' date='Nov, 2023 - Nov, 2023' description='💰 Node.js Financial Management App to Manage Your Money and Receive Investment Advice.' tags={['Node.js', 'Handlebars', 'PostgreSQL']} link='https://github.com/phbrg/cashflow' blank={true}/>
      </div>
      <h3 className='other-projects'>You can find more of my projects <a target='_blank' href="https://github.com/phbrg?tab=repositories">here</a></h3>
    </section>
  )
}
