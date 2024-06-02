import { Outlet } from "react-router";
import Navigation from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { menuItem } from "../components/layout/Navbar/types";

const menuItems: menuItem[] = [
    {
        name: 'About',
        href: '/#about'
    },
    {
        name: 'Experience',
        href: '/#work'
    },
    {
        name: 'Projects',
        href: '/#projects'
    },
    {
        name: 'Contact',
        href: '/contact'
    },                              
]

export default function Layout() {
    return (
        <>
          <Navigation menuStart={menuItems}/>
          <Outlet/>
          <Footer/> 
        </>
    )
}