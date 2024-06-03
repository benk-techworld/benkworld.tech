import { Fragment } from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout(): JSX.Element {
    return (
        <Fragment>
            <Navigation/>
            <main><Outlet/></main>
            <Footer/>
        </Fragment>
    )
}