import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button"
import {Link} from "@nextui-org/link"
import { MdArticle } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
 
export default function Navigationbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("");

    const menuItems: string[] = [
        'Home',
        "About",
        "Experience",
        "Projects",
    ]

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <Navbar 
            shouldHideOnScroll 
            onMenuOpenChange={setIsMenuOpen}
            className="bg-[rgb(15, 16, 17)] border-b border-[rgb(48,48,48)]"
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
                    "data-[active=true]:after:bg-pink",                    
                ]
            }}

        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link className="font-bold text-inherit" href="#">Benk <span className="text-pink ml-1">TechWorld</span></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item:string,idx:number)=>{
                    return (
                        <NavbarItem 
                            isActive={activeItem === item}
                            key={`${item}-${idx}`}
                        >
                            <Link onScroll={()=>handleItemClick(item)} onPress={()=>handleItemClick(item)} className="text-[rgb(185,184,184)]" href="#">
                                {item}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex gap-1.5">
                    <Button 
                        size="sm" 
                        radius="md" 
                        href="#" 
                        variant="light"
                        className="text-[rgb(185,184,184)] font-bold"
                        startContent={<IoChatboxEllipses/>}
                    >
                        Contact
                    </Button>                    
                    <Button 
                        size="sm" 
                        radius="md" 
                        href="#" 
                        variant="bordered"
                        className="text-[rgb(185,184,184)] font-bold border-1 hover:border-0 hover:text-pink"
                        startContent={<MdArticle/>}
                    >
                        Blog
                    </Button>                    
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-[rgb(15, 16, 17)]">
                {menuItems.map((menuItem:string,idx:number)=>{
                    return (
                        <NavbarMenuItem 
                            key={`${menuItem}-${idx}`}
                        >
                            <Link className="text-[rgb(185,184,184)]" href="#">
                                {menuItem}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}                                            
            </NavbarMenu>       
        </Navbar>
    )
}