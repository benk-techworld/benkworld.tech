import { useLayoutEffect } from "react";

export default function NotFound(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "Not Found | Arafet Techworld"
    },[])
        
    const Messages = [
        "Oh no! We can't seal the deal!",
        "We can't seal with it!",
        "This is seal-iously embarassing...",
        "Seal-ly us! We can't find that page.",
        "Don't flip, but we can't find that.",
        "We don't sea that page."
    ];
    
    const rand_seed = Math.floor(Math.random() * Messages.length);

    return (
        <div className="flex flex-col justify-center items-center flex-1">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">404</h1>
            <p className="text-center text-3xl lg:text-5xl mb-8">{Messages[rand_seed]}</p>
        </div>
    )
}