import { ComponentProps } from "react"
import {useTheme} from "@/contexts/ThemeProvider/index"

type ThemeSwitcherButtonProps = ComponentProps<'button'> & {
  lightIcon: React.ReactNode
  darkIcon: React.ReactNode
}

const ThemeSwitcherButton : React.FC<ThemeSwitcherButtonProps> = ({lightIcon,darkIcon,...rest}) => {

  const {theme,setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme==="dark" ? "light" : "dark")
  }
  
  return (
      <button onClick={toggleTheme} {...rest}>
        {theme === "dark" ? lightIcon : darkIcon}
      </button>      
  );
}

export default ThemeSwitcherButton;