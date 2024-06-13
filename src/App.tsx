import {Routes,Route,useNavigate} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
// import Construction from '@/components/utils/Construction'
import Layout from "@/components/layout";
import Home from '@/pages/Home';
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Resume from '@/pages/Resume';


function App() {

  const navigate = useNavigate();
  
  return (
      <NextUIProvider navigate={navigate}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="resume" element={<Resume/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
      </NextUIProvider>
  )
}

export default App
