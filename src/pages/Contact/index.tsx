import { useLayoutEffect } from "react"

export default function Contact(): JSX.Element {
    
    useLayoutEffect(()=>{
        document.title = "Contact | Arafet Techworld"
    },[])

    return (
        <h1 className="flex-1">Contact Page</h1>
    )
}