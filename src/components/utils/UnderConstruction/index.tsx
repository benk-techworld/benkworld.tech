import { useLayoutEffect } from "react";
import { Icon } from "@iconify/react";

export default function UnderConstruction({pageName}:{pageName: string}) {

    useLayoutEffect(()=>{
        document.title= `${pageName} | Arafet Techworld`
    },[pageName])

    return (
        <div className="flex flex-col items-center gap-2 absolute w-screen top-1/2 -translate-y-1/2 text-center">
            {/* <LuConstruction className="text-[70px] sm:text-[100px] text-foreground"/> */}
            <Icon icon="mdi:construction" width={170}/>
            <h1 className="text-3xl font-bold text-foreground whitespace-nowrap sm:text-4xl">COMING SOON</h1>
            <h2 className="text-2xl sm:text-3xl font-light text-foreground">{pageName} Page is under construction</h2>
        </div>
    );
}
