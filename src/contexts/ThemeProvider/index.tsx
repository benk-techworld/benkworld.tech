import React, { createContext, useState,useEffect} from "react"
import type { Theme, ThemeProviderProps,ThemeProviderState} from "./types"
import { getSystemTheme } from "@/utils"

const initialState: ThemeProviderState = {
  theme: getSystemTheme(),
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const ThemeProvider: React.FC<ThemeProviderProps> = (
    {
        children,
        defaultTheme,
        storageKey = "theme",
        ...props
    }: ThemeProviderProps
) => {


    const [theme,setTheme] = useState<Theme>(()=>defaultTheme ? defaultTheme : getSystemTheme())

    window.document.documentElement.className = theme

    useEffect(() => {
        // Add event listener for system theme changes
        const handleMediaThemeChange = () => {
            try {
                const storedTheme = localStorage.getItem(storageKey)
                if (!storedTheme && !defaultTheme) {
                    const systemTheme = getSystemTheme() as Theme
                    setTheme(systemTheme)
                }
            } catch (e) {
                console.error(e)
            }            
        }

        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQueryList.addEventListener("change", handleMediaThemeChange);

        return () => {
            mediaQueryList.removeEventListener("change",handleMediaThemeChange);
        };
    }, [storageKey,defaultTheme]); 
    

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            setTheme(theme)
            try {
              localStorage.setItem(storageKey,theme)  
            } catch(e){
                console.error(e)
            }
            
        }
    }

    useEffect(() => {
        const handleStorage = (e: StorageEvent) => {
            if (e.key !== storageKey) {
                return
            }
            const newTheme = e.newValue as Theme || defaultTheme || getSystemTheme()
            setTheme(newTheme)
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [setTheme,storageKey,defaultTheme])    

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )

}

export {ThemeProvider,ThemeProviderContext}