import {Routes,Route,useNavigate} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import Construction from '@/components/utils/Construction'
import Layout from "@/components/layout";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";

function App() {

  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Construction/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </NextUIProvider>
  )
}

export default App
