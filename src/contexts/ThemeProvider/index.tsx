import React, { createContext, useState,useEffect} from "react"
import type { Theme, ThemeProviderProps,ThemeProviderState} from "./types"
import { getSystemTheme } from "@/utils"

const themes = ["dark","light"]

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

    const getInitTheme = () => {
        try {
            const storedTheme = localStorage.getItem(storageKey)
            if (storedTheme && themes.includes(storedTheme)) {
                return storedTheme as Theme
            }

        }catch (e) {
            console.error(e)
        }

        return defaultTheme || getSystemTheme()

    }

    const [theme,setTheme] = useState<Theme>(getInitTheme())

    window.document.documentElement.className = theme

    useEffect(() => {
        // Add event listener for system theme changes
        const handleMediaThemeChange = () => {
            try {
                const storedTheme = localStorage.getItem(storageKey)
                if (!storedTheme && !defaultTheme || storedTheme && !themes.includes(storedTheme)) {
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

            let newTheme : Theme = defaultTheme || getSystemTheme()
            if (e.key !== storageKey) {
                return
            }

            if (e.newValue && themes.includes(e.newValue)){
                newTheme = e.newValue as Theme
            }

            setTheme(newTheme)
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [storageKey,defaultTheme])    

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )

}

export {ThemeProvider,ThemeProviderContext}