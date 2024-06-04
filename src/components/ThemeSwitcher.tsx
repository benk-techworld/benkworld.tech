import { useState,useEffect } from "react";
import {useTheme} from "@/hooks/useTheme"
import { Switch } from "@nextui-org/react";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeSwitcher() {
  const {theme,setTheme} = useTheme();

  const [currentTheme, setCurrentTheme] = useState(theme); 
  useEffect(() => {
    // Update currentTheme based on theme changes (e.g., from context)
    setCurrentTheme(theme);
  }, [theme]); // Re-run on theme change

  return (
    <Switch
      defaultSelected={currentTheme=="dark"}
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      size="sm"
      startContent={<MdSunny/>}
      endContent={<IoIosMoon/>}
    />
  );
}
