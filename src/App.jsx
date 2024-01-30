import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="*" element={}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
