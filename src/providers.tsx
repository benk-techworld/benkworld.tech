import {NextUIProvider} from '@nextui-org/react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from '@/contexts/ThemeProvider'

export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider> 
      </NextUIProvider>
    </BrowserRouter>
  )
}