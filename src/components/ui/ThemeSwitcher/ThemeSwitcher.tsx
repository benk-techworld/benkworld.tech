import {useTheme} from "@/contexts/ThemeProvider/index"
// import {Button} from "@nextui-org/react"
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeSwitcher() {

  const {theme,setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme==="dark" ? "light" : "dark")
  }
  
  return (
      <button 
        onClick={toggleTheme} 
        className="bg-transparent active:bg-foreground-200 p-[0.39rem] rounded-full"
      >
        {theme === "dark" ? <MdSunny className="text-secondary" size={21}/> : 
        <IoIosMoon className="text-secondary" size={21}/>
        }
      </button>      
  );
}
