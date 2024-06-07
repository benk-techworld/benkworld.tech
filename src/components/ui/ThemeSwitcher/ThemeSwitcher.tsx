import {useTheme} from "@/hooks/useTheme"
// import {Button} from "@nextui-org/react"
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeSwitcher() {

  const {theme,setTheme} = useTheme();
  
  return (
      <button onClick={()=>setTheme(theme==="dark"? "light":"dark")} className="bg-transparent rounded">
        {theme === "dark" ? <MdSunny className="text-secondary" size={23}/> : <IoIosMoon className="text-secondary" size={23}/>}
      </button>      
  );
}
