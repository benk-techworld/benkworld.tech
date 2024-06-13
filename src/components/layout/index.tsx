import Navigation from "./Navbar";
// import Header from "./Header";
import { Outlet} from "react-router-dom";

import PageTransition from "@/animations/PageTransition";
import StairTransition from "@/animations/StairTransition";

export default function Layout(): JSX.Element {

    return (
        <div className="flex flex-col min-w-screen min-h-screen">
            <Navigation/>
            <StairTransition/>
            <PageTransition><Outlet/></PageTransition>
        </div>
    )
}