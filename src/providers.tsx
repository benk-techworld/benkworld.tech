import {NextUIProvider} from '@nextui-org/react'
import {BrowserRouter} from 'react-router-dom'

export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <NextUIProvider>
          {children}
      </NextUIProvider>
    </BrowserRouter>
  )
}