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
          <Route path="/:lang?" element={<Home />} />
          <Route path="/:lang?/projects" element={<Projects />} />
          <Route path="/:lang?/blog" element={<Blog />} />
          <Route path="/:lang?/post/:id" element={<Post />} />
          <Route path="/:lang?/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
