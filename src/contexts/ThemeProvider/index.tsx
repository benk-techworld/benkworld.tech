import React, { createContext, useState,useEffect,useCallback } from "react"
import type { Theme, ThemeProviderProps,ThemeProviderState} from "./types"
import { getSystemTheme } from "@/utils"

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const ThemeProvider: React.FC<ThemeProviderProps> = (
    {
        children,
        defaultTheme = "system",
        storageKey = "theme",
        ...props
    }: ThemeProviderProps
) => {

    const [theme,setTheme] = useState<Theme>(
        ()=>(localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    const root = window.document.documentElement

    const handleThemeChange = useCallback(() => {

        let resolved = theme;

        if (theme === "system") {
            resolved = getSystemTheme();
        }
        root.className = resolved;

    }, [root,theme]); 

    handleThemeChange();

    useEffect(() => {
        // Add event listener for system theme changes

        const handleMediaThemeChange = () => {

            if (!localStorage.getItem(storageKey)) {
                const systemTheme = getSystemTheme() as Theme
                setTheme(systemTheme)
                root.className = systemTheme
            }                  
        }

        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQueryList.addEventListener("change", handleMediaThemeChange);

        return () => {
            mediaQueryList.removeEventListener("change",handleMediaThemeChange);
        };
    }, [root,theme,storageKey]); 
    

    const value = {
        theme: theme==="system" ? getSystemTheme() : theme,
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
            const theme = e.newValue as Theme || defaultTheme
            setTheme(theme)
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