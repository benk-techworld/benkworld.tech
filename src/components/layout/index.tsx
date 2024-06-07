import Navigation from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import { Outlet } from "react-router";


export default function Layout(): JSX.Element {
    return (
        <div className="flex flex-col min-h-screen">
            <Banner/>
            <Navigation/>
            <main className="flex-1"><Outlet/></main>
            <Footer/>
        </div>
    )
}