import React, { useState,useEffect,useLayoutEffect} from "react"
import type { Theme, ThemeProviderProps} from "./types"
import {ThemeProviderContext} from './index'
import { getSystemTheme } from "@/utils"

const themes : Readonly<string[]> = ["dark","light"]

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
            return defaultTheme || getSystemTheme()

        }catch (e) {
            console.error(e)
            return defaultTheme || getSystemTheme()
        }

    }

    const [theme,setTheme] = useState<Theme>(getInitTheme)


    useLayoutEffect(()=>{
        window.document.documentElement.className = theme
    },[theme])

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
                const systemTheme = getSystemTheme() as Theme
                setTheme(systemTheme)
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



export default ThemeProvider;