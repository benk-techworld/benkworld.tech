import { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/react"
import {useLocation} from 'react-router-dom'
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";



export default function Navigation(): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);

    useEffect(()=>{
        setActiveItem(location.pathname)
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    },[location]) // eslint-disable-line react-hooks/exhaustive-deps

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
                    "data-[active=true]:after:content-['']",
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
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Link className="font-bold text-foreground text-[0.98em]" href="/">Benk <span className="text-primary ml-1">TechWorld</span></Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4">
                    <NavbarItem isActive={activeItem === "/"}>
                        <Link className="text-foreground" href="/">Home</Link>
                    </NavbarItem>                                 
                    <NavbarItem isActive={activeItem === "/about"}>
                        <Link className="text-foreground" href="/about">About</Link>
                    </NavbarItem>  
                    <NavbarItem isActive={activeItem === "/contact"}>
                        <Link className="text-foreground" href="/contact">Contact</Link>
                    </NavbarItem>
                    <NavbarItem isActive={activeItem === "/blog"}>
                        <Link className="text-foreground" href="/blog">Blog</Link>
                    </NavbarItem>    
                </NavbarContent>                                                                
            </NavbarContent>         

            <NavbarContent className="flex gap-3" justify="end">
                <NavbarItem className="hidden sm:flex">
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fsociety.fu" color="secondary">
                        <FaFacebookSquare size={22}/>
                    </Link>
                </NavbarItem> 
                <NavbarItem >
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arafet-ben-kilani/" color="secondary">
                        <FaLinkedin size={22}/>
                    </Link>  
                </NavbarItem>
                <NavbarItem >
                    <Link target="_blank" rel="noopener noreferrer" href="https://github.com/benk-techworld" color="secondary">
                        <FaGithub size={22}/>
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
                    <Link className="text-foreground" href="/">Home</Link>
                </NavbarMenuItem>                 
                <NavbarMenuItem>
                    <Link className="text-foreground" href="/about">About</Link>
                </NavbarMenuItem>  
                <NavbarMenuItem>
                    <Link className="text-foreground" href="/contact">Contact</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-foreground" href="/blog">Blog</Link>
                </NavbarMenuItem>                                                                                          
            </NavbarMenu>  

        </Navbar>
    )
}