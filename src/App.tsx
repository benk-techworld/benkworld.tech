import {Routes,Route,useNavigate} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import Layout from "@/pages/Layout";
// import Home from '@/pages/Home';
// import Blog from "@/pages/Blog";
// import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
// import About from "@/pages/About";
// import Resume from '@/pages/Resume';
import UnderConstruction from '@/components/utils/UnderConstruction';


function App() {

  const navigate = useNavigate();
  
  return (
      <NextUIProvider navigate={navigate} className='bg-light-gradient dark:bg-dark-gradient min-h-screen overflow-hidden'>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<UnderConstruction pageName='Home'/>}/>
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
