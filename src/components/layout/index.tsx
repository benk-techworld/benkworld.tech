import { Fragment } from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import type {MenuItem} from './Navbar/types'

const navItems: MenuItem[] = [
    {label: 'About', href: '/#about'},
    {label: 'Experience', href: '/#exp'},
    {label: 'Projects', href: '/#projects'},
]

export default function Layout(): JSX.Element {
    return (
        <Fragment>
            <Navigation menuItems={navItems}/>
            <main><Outlet/></main>
            <Footer/>
        </Fragment>
    )
}