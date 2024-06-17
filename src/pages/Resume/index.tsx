import { useLayoutEffect } from "react"

export default function Resume() {

    useLayoutEffect(()=>{
        document.title = "My Resume | Arafet Techworld"
    },[])

    return (
        <>
            <h1>Resume Page</h1>
        </>
    )
}