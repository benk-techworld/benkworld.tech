import { useLayoutEffect } from "react"

export default function About(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "About Me | Arafet Techworld"
    },[])
        
    return (
        <h1 className="flex-1">About Page</h1>
    )
}