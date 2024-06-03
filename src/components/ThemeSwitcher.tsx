import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useTheme(); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "dark"}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="sm"
      startContent={<MdSunny/>}
      endContent={<IoIosMoon/>}
    />
  );
}
