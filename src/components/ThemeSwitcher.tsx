import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import { FaMoon } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Switch
      defaultSelected={theme==="dark"}
      onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
      size="sm"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <IoMdSunny className={className} />
        ) : (
          <FaMoon className={className} />
        )
      }
    />
  )
}
