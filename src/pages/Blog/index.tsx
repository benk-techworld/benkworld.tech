import { useLayoutEffect } from "react"

export default function Blog(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "Blog | Arafet Techworld"
    },[])
        
    return (
        <h1>Blog Page</h1>
    )
}