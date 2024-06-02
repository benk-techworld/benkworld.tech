import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link,Button} from "@nextui-org/react"
import ThemeSwitcher from "../ThemeSwitcher";
import { TfiWrite } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";

 
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
            // shouldHideOnScroll 
            onMenuOpenChange={setIsMenuOpen}
            className="gradient-background border-b border-[#44424275]"
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
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Link className="font-bold text-foreground text-small sm:text-medium" href="#">Benk <span className="text-red-500 ml-1">TechWorld</span></Link>
                </NavbarBrand>                    
                {menuItems.map((item:string,idx:number)=>{
                    return (
                        <NavbarItem 
                            isActive={activeItem === item}
                            key={`${item}-${idx}`}
                            className="hidden sm:flex gap-4"
                        >
                            <Link onScroll={()=>handleItemClick(item)} onPress={()=>handleItemClick(item)} className="text-foreground" href="#">
                                {item}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitcher/>
                <NavbarItem className="sm:flex gap-1 hidden">
                    <Button 
                        size="sm" 
                        radius="md" 
                        href="#" 
                        variant="ghost"
                        color="secondary"
                        className="text-foreground border-1 border-foreground hover:border-0"
                        startContent={<IoIosMail/>}
                    >
                        Contact
                    </Button>                                        
                    <Button 
                        size="sm" 
                        radius="md" 
                        href="#" 
                        variant="ghost"
                        color="primary"
                        className="text-foreground border-1 border-foreground hover:border-0 hover:text-[#FEFEFE]"
                        startContent={<TfiWrite/>}
                    >
                        Blog
                    </Button>                    
                </NavbarItem>
                <NavbarItem className="sm:hidden flex">
                    <Button 
                        size="sm" 
                        isIconOnly 
                        className="text-foreground border-0" 
                        variant="bordered" 
                    >
                        <IoIosMail size={25}/>
                    </Button> 
                    <Button 
                        size="sm" 
                        isIconOnly 
                        className="text-foreground border-0" 
                        variant="bordered" 
                    >
                        <TfiWrite size={20}/>
                    </Button>                                                                                     
                </NavbarItem>    
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />                                           
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((menuItem:string,idx:number)=>{
                    return (
                        <NavbarMenuItem 
                            key={`${menuItem}-${idx}`}
                        >
                            <Link className="text-foreground" href="#">
                                {menuItem}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}                                                   
            </NavbarMenu>       
        </Navbar>
    )
}