import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Projects } from "./pages/Projects/Projects"
import { Blog } from "./pages/Blog/Blog"
import { Post } from "./pages/Post/Post"
import { NotFound } from "./pages/NotFound/NotFound"

import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"

import { useEffect, useState } from "react"
import { Tooltip } from "react-tooltip"

function App() {
  const [lang, setLang] = useState(window.location.href.split('/')[3]);
  useEffect(() => {
    if(!['pt', 'eng'].includes(lang.toLowerCase())) {
      window.location.href = '/pt'
    } else {
      setLang(lang)
    }

  }, [lang]);

  return (
    <>
      <Tooltip id='tooltip' />
      <Toaster richColors />
      <BrowserRouter>
        <Header lang={lang} />
        <Routes>
          <Route path={`/${lang}`} element={<Home lang={lang} />} />
          <Route path={`/${lang}/about`} element={<About lang={lang} />} />
          <Route path={`/${lang}/projects`} element={<Projects lang={lang} />} />
          <Route path={`/${lang}/blog`} element={<Blog lang={lang} />} />
          <Route path={`/${lang}/post/:postId`} element={<Post lang={lang} />} />
          <Route path={`/${lang}/*`} element={<NotFound lang={lang} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
