import { useLayoutEffect } from "react";
import { LuConstruction } from "react-icons/lu";

export default function UnderConstruction({pageName}:{pageName: string}) {

    useLayoutEffect(()=>{
        document.title= `${pageName} | Arafet Techworld`
    },[pageName])

    return (
        <div className="flex flex-col items-center gap-2 absolute w-screen top-1/2 -translate-y-1/2">
            <LuConstruction className="text-[70px] sm:text-[100px] text-foreground"/>
            <h1 className="text-2xl font-bold text-foreground whitespace-nowrap sm:text-4xl">COMING SOON</h1>
            <h2 className="text-xl sm:text-2xl font-light text-foreground whitespace-nowrap">{pageName} Page is under construction</h2>
        </div>
    );
}
