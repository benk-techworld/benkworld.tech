import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from '@/contexts/ThemeProvider/provider'

import { AnimatePresence } from 'framer-motion'

export default function Providers({children}: { children: React.ReactNode }) {

  return (
    <AnimatePresence mode='wait' initial={false}>
      <BrowserRouter>
          <ThemeProvider>
              {children} 
          </ThemeProvider>
      </BrowserRouter>
    </AnimatePresence>

  )
}