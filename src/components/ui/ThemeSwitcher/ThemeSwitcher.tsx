import {useTheme} from "@/contexts/ThemeProvider/index"
// import {Button} from "@nextui-org/react"

type ThemeSwitcherProps = {
  className?: string
  lightIcon: React.ReactNode
  darkIcon: React.ReactNode
}

export default function ThemeSwitcher({className,lightIcon,darkIcon} : ThemeSwitcherProps) {

  const {theme,setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme==="dark" ? "light" : "dark")
  }
  
  return (
      <button onClick={toggleTheme} className={className}>
        {theme === "dark" ? lightIcon : darkIcon}
      </button>      
  );
}
