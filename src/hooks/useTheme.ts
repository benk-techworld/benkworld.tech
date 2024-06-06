import { useContext } from "react";
import { ThemeProviderContext } from "@/contexts/ThemeProvider/context";

export const useTheme = () => {

    const ctx = useContext(ThemeProviderContext)

    if (ctx === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return ctx
}

