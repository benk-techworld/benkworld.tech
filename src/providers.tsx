import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from '@/contexts/ThemeProvider'

export default function Providers({children}: { children: React.ReactNode }) {

  return (
    <BrowserRouter>
      <ThemeProvider>
          {children} 
      </ThemeProvider>
    </BrowserRouter>
    
  )
}