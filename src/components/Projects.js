import Card from './Card'

import './Projects.css'

const Projects = () => {
  return (
    <div className='Projects'>
      <h1 className='title'>Projects</h1>
      <Card title = 'wordle-project' description = 'Wordle is a word guessing game where users guess the word by its letter. BTW, its my first project using React.js' source = 'https://github.com/phbrg/wordle-react' deploy = 'https://ph-wordle.vercel.app/' skills = {[{icon: <i class="fa-brands fa-js"></i>, name: 'Javascript'}, {icon: <i class="fa-brands fa-react"></i>, name: 'React.js'}]} />
      <Card title = 'arkadius' description = 'Arkadius is a social network for users to create and customize profiles as they wish, with the ability to modify content and add links' source = 'https://github.com/phbrg/arkadius' skills = {[{icon: <i class="fa-brands fa-js"></i>, name: 'Javascript'}, {icon: <i class="fa-brands fa-node-js"></i>, name: 'Node.js'}, {icon: <i class="fa-solid fa-database"></i>, name: 'PostgreSQL'}]} />
      <Card title = 'cashflow' description = 'Cashflow is a financial management app where users manage their money and receive investment advice. It was part of a school competition.' source = 'https://github.com/phbrg/wordle-react' skills = {[{icon: <i class="fa-brands fa-js"></i>, name: 'Javascript'}, {icon: <i class="fa-brands fa-node-js"></i>, name: 'Node.js'}, {icon: <i class="fa-solid fa-database"></i>, name: 'PostgreSQL'}]} />
    </div>
  )
}

export default Projects