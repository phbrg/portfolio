import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Toaster } from 'sonner'

import { Nav } from './components/Nav/Nav'

import { Home } from './pages/Home/Home'
import { Projects } from './pages/Projects/Projects'
import { Blog } from './pages/Blog/Blog'
import { Post } from './pages/Post/Post'
import { NotFound } from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
