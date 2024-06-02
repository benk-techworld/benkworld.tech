import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import {Link,Button} from "@nextui-org/react"
import { TfiWrite } from "react-icons/tfi";
import ThemeSwitcher from "../../ThemeSwitcher";
import { menuItem } from './types'

type Props = {
    menuStart: menuItem[]
    menuEnd?:   menuItem[]
}

export default function Navigation({menuStart}: Props): JSX.Element {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
            <Navbar 
                // shouldHideOnScroll 
                onMenuOpenChange={setIsMenuOpen}
                className="border-b border-[#44424275]"
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
                        <Link className="font-bold text-foreground text-small sm:text-medium" href="/">
                            Benk <span className="text-red-500 ml-1">TechWorld</span>
                        </Link>
                    </NavbarBrand>                    
                    {
                        menuStart.map((item: menuItem,idx:number)=>{
                            return (
                                <NavbarItem isActive={activeItem === item.name} key={`${item.name}-${idx}`} className="hidden sm:flex gap-2">
                                    <Link onPress={()=>handleItemClick(item.name)} className="text-foreground" href={item.href}>
                                        {item.name}
                                    </Link>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>

                <NavbarContent justify="end">
                    <ThemeSwitcher/>
                    <NavbarItem className="sm:flex hidden">                                    
                        <Button 
                            size="sm" 
                            radius="md" 
                            variant="ghost"
                            as={Link}
                            href="/blog"
                            color="primary"
                            className="text-foreground hover:text-[#FEFEFE] border-1 border-foreground hover:border-0"
                            startContent={<TfiWrite/>}
                        >
                            Blog
                        </Button>                    
                    </NavbarItem>
                    <NavbarItem className="sm:hidden flex">
                        <Button 
                            as={Link}
                            href="/blog"
                            size="sm" 
                            isIconOnly 
                            className="text-foreground border-0" 
                            variant="bordered" 
                        >
                            <TfiWrite size={20}/>
                        </Button>                                                                                     
                    </NavbarItem>    
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menuStart" : "Open menuStart"}
                        className="sm:hidden"
                    />                                           
                </NavbarContent>
                <NavbarMenu>
                    {
                        menuStart.map((item: menuItem,idx:number)=>{
                            return (
                                <NavbarMenuItem 
                                    key={`${item.name}-${idx}`}
                                >
                                    <Link className="text-foreground" href={item.href}>
                                        {item.name}
                                    </Link>
                                </NavbarMenuItem>
                            )
                        })
                    }                                                   
                </NavbarMenu>       
            </Navbar>
    )
}