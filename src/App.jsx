import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import AboutMe from './components/aboutme/AboutMe'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <main className='App'>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
