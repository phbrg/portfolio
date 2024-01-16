import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import AboutMe from './components/aboutme/AboutMe'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'

function App() {
  return (
    <main className='App'>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
