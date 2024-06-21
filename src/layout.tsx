import Navigation from "@/components/layout/Navbar";
import { Outlet} from "react-router-dom";

import PageTransition from "@/animations/PageTransition";
import StairTransition from "@/animations/StairTransition";

export default function Layout(): JSX.Element {

    return (
        <>
            <Navigation/>
            <StairTransition/>
            <PageTransition>
                <Outlet/>
            </PageTransition>
        </>
    )
}