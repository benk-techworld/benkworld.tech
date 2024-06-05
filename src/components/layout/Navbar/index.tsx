import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/react"
import ThemeSwitcher from "../../ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import type {MenuItem} from './types'

type NavigationProps = {
    menuItems: MenuItem[]
}

export default function Navigation({menuItems}: NavigationProps): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("");


    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (

        <Navbar 
            onMenuOpenChange={setIsMenuOpen}
            className="bg-background border-b border-[#44424275]"
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
                    "data-[active=true]:after:bg-red-500",                    
                ]
            }}

        >   
            {/* Desktop Menu */}

            <NavbarContent justify="start">
                <NavbarBrand>
                    <Link className="font-bold text-foreground text-[0.98em]" href="/#">
                        Benk <span className="text-red-500 ml-1">TechWorld</span>
                    </Link>
                </NavbarBrand>                    
                {menuItems.map((item:MenuItem,idx:number)=>{
                    return (
                        <NavbarItem isActive={activeItem === item.label} key={`${item.label}-${idx}`} className="hidden sm:flex gap-4">
                            <Link onPress={()=>handleItemClick(item.label)} className="text-foreground" href={item.href}>
                                {item.label}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>         
            <NavbarContent justify="end">
                <NavbarItem className="flex gap-3">
                    <Link className="hidden sm:block" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fsociety.fu" color="secondary">
                        <FaFacebookSquare size={22}/>
                    </Link>                     
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arafet-ben-kilani/" color="secondary">
                        <FaLinkedin size={22}/>
                    </Link>                    
                    <Link target="_blank" rel="noopener noreferrer" href="https://github.com/benk-techworld" color="secondary">
                        <FaGithub size={22}/>
                    </Link>
                    <ThemeSwitcher/>
                </NavbarItem>                                              
            </NavbarContent>

            {/* Mobile Menu */}

            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-secondary sm:hidden"/>            
            <NavbarMenu>
                {menuItems.map((menuItem:MenuItem,idx:number)=>{
                    return (
                        <NavbarMenuItem key={`${menuItem.label}-${idx}`}>
                            <Link className="text-foreground" href={menuItem.href}>{menuItem.label}</Link>
                        </NavbarMenuItem>
                    )
                })
                }                                                   
            </NavbarMenu>  

        </Navbar>
    )
}