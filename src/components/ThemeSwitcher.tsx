import {useTheme} from "@/hooks/useTheme"
import {Button} from "@nextui-org/react"
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeSwitcher() {

  const {theme,setTheme} = useTheme();
  
  return (
      <Button onPress={()=>setTheme(theme==="dark"? "light":"dark")} isIconOnly size="sm" className="bg-transparent inline-block" aria-label="Like">
        {theme === "dark" ? <MdSunny className="text-secondary" size={21}/> : <IoIosMoon className="text-secondary" size={21}/>}
      </Button>      
  );
}
