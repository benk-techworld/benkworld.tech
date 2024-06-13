import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/react"
import {useLocation} from 'react-router-dom'
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa6";

import logo from '@/assets/logo.svg'

export default function Navigation(): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();

    return (

        <Navbar 
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-background"
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
                    "data-[active=true]:after:bg-primary",
                ]
            }}

        >  
                <NavbarBrand>
                    <Link onClick={()=>{if (isMenuOpen) setIsMenuOpen(false)}} href="/">
                        <img src={logo} className="mr-2 w-8" alt="Logo" />
                        <h1 className="text-secondary font-bold text-[0.98em]" >Benk <span className="text-primary">TechWorld</span></h1>
                    </Link>
                </NavbarBrand>                          
                <NavbarContent className="hidden sm:flex gap-3" justify="center">                               
                    <NavbarItem isActive={location.pathname === "/about"}>
                        <Link color="secondary" href="/about">About</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/resume"}>
                        <Link color="secondary" href="/resume">Resume</Link>
                    </NavbarItem> 
                    <NavbarItem isActive={location.pathname === "/projects"}>
                        <Link color="secondary" href="/projects">Projects</Link>
                    </NavbarItem>                                            
                    <NavbarItem isActive={location.pathname === "/contact"}>
                        <Link color="secondary" href="/contact">Contact</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/blog"}>
                        <Link color="secondary" href="/blog">Blog</Link>
                    </NavbarItem>                      
                </NavbarContent>   

            <NavbarContent className="flex gap-2" justify="end">
                <NavbarItem>
                    <Link className="hidden sm:flex" isExternal href="https://www.facebook.com/fsociety.fu" color="secondary">
                        <FaFacebookSquare size={21}/>
                    </Link>
                    <Link className="flex sm:hidden" href="/blog" color="secondary">
                        <FaBloggerB size={21}/>
                    </Link>                    
                </NavbarItem> 
                <NavbarItem className="hidden sm:flex" >
                    <Link isExternal href="https://www.linkedin.com/in/arafet-ben-kilani/" color="secondary">
                        <FaLinkedin size={21}/>
                    </Link>  
                </NavbarItem>
                <NavbarItem className="hidden sm:flex" >
                    <Link isExternal href="https://github.com/benk-techworld" color="secondary">
                        <FaGithub size={21}/>
                    </Link>
                </NavbarItem> 
                <NavbarItem >
                    <ThemeSwitcher/>
                </NavbarItem>                                                                        
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-secondary sm:hidden"/>            
            <NavbarMenu>            
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="secondary" href="/about">About</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="secondary" href="/resume">Resume</Link>
                </NavbarMenuItem>                    
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="secondary" href="/projects">Projects</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link onClick={()=>setIsMenuOpen(false)} color="secondary" href="/contact">Contact</Link>
                </NavbarMenuItem>                                                                                                      
            </NavbarMenu>  

        </Navbar>
    )
}