import Blog from './pages/Blog'
import Home from './pages/Home'
import { Routes,Route } from 'react-router'
import Layout from './pages/layout'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
