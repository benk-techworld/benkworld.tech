import { ComponentProps } from "react"
import {useTheme} from "@/contexts/ThemeProvider/index"

type ThemeSwitcherProps = ComponentProps<'button'> & {
  lightIcon: React.ReactNode
  darkIcon: React.ReactNode
}

export default function ThemeSwitcherButton({className,lightIcon,darkIcon,...rest} : ThemeSwitcherProps) {

  const {theme,setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme==="dark" ? "light" : "dark")
  }
  
  return (
      <button onClick={toggleTheme} className={className} {...rest}>
        {theme === "dark" ? lightIcon : darkIcon}
      </button>      
  );
}
