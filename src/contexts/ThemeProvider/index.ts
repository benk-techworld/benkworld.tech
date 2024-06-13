import {createContext,useContext} from "react"
import { getSystemTheme } from "@/utils"
import type {ThemeProviderState} from "./types"

const initialState: ThemeProviderState = {
  theme: getSystemTheme(),
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const useTheme = () => {

    const ctx = useContext(ThemeProviderContext)

    if (ctx === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return ctx
}

export {ThemeProviderContext,useTheme}