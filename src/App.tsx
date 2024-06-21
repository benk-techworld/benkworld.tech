import {Routes,Route,useNavigate} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import Layout from "@/layout";
import Home from '@/pages/Home';
// import Blog from "@/pages/Blog";
// import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
// import About from "@/pages/About";
// import Resume from '@/pages/Resume';
import UnderConstruction from '@/components/utils/UnderConstruction';

function App() {

  const navigate = useNavigate();
  
  return (
      <NextUIProvider navigate={navigate} className='min-h-screen bg-light-gradient dark:bg-dark-gradient'>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<UnderConstruction pageName='About'/>}/>
              <Route path="resume" element={<UnderConstruction pageName='Resume'/>}/>
              <Route path="contact" element={<UnderConstruction pageName='Contact'/>}/>
              <Route path="blog" element={<UnderConstruction pageName='Blog'/>}/>
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
      </NextUIProvider>
  )
}

export default App;
