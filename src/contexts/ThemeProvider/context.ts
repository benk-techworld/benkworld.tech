import  { createContext} from "react"
import type { ThemeProviderState} from "./types"
import { getSystemTheme } from "@/utils"

const initialState: ThemeProviderState = {
  theme: getSystemTheme(),
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)