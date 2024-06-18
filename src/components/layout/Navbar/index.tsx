import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/react"
import {useLocation} from 'react-router-dom'
import ThemeSwitcherButton from "@/components/ui/ThemeSwitcherButton";
import { Icon } from "@iconify/react";

// import logo from '@/assets/logo.svg'
import Social from "@/components/ui/Social";

export default function Navigation(): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();

    return (

        <Navbar 
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-transparent"
            isBlurred
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-focus",
                ]
            }}
            maxWidth="xl"

        >  
                <NavbarBrand>
                    <Link onClick={()=>{if (isMenuOpen) setIsMenuOpen(false)}} href="/">
                        {/* <img src={logo} className="mr-2 w-8" alt="Logo" /> */}
                        <h1 className="text-foreground font-bold text-[0.98em]" >Benk <span className="text-primary">TechWorld</span></h1>
                    </Link>
                </NavbarBrand>                          
                <NavbarContent className="hidden sm:flex gap-4" justify="center">                               
                    <NavbarItem isActive={location.pathname === "/about"}>
                        <Link color="foreground" href="/about">About</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/resume"}>
                        <Link color="foreground" href="/resume">Resume</Link>
                    </NavbarItem>                                            
                    <NavbarItem isActive={location.pathname === "/contact"}>
                        <Link color="foreground" href="/contact">Contact</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/blog"}>
                        <Link color="foreground" href="/blog">Blog</Link>
                    </NavbarItem>                      
                </NavbarContent>   

            <NavbarContent as='div' className="items-center" justify="end">
                <NavbarItem>
                    <Social containerStyles="flex gap-1" color="foreground"/>
                    <ThemeSwitcherButton 
                        darkIcon={<Icon icon="clarity:moon-solid" width={24} />} 
                        lightIcon={<Icon icon="solar:sun-bold" width={24} />}
                        className="bg-transparent text-foreground active:bg-foreground/15 p-[0.39rem] ml-1 rounded-full"
                    />                                      
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-foreground sm:hidden"/>            
            <NavbarMenu className="bg-background/40">            
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="foreground" href="/about">About</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="foreground" href="/resume">Resume</Link>
                </NavbarMenuItem>                    
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="foreground" href="/contact">Contact</Link>
                </NavbarMenuItem>                                                                                                      
            </NavbarMenu>  

        </Navbar>
    )
}