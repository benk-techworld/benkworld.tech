import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {BrowserRouter} from 'react-router-dom'

export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>      
      </BrowserRouter>
    </NextUIProvider>
  )
}