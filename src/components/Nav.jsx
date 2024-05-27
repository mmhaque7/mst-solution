import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import React, { useState } from 'react'
import WebLogo from './WebLogo';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Work", link: "/work" },
        { name: "Services", link: "/services" },
        { name: "About Us", link: "/about" },
        { name: "Blog", link: "/blog" },
        { name: "Contact Us", link: "/contact" }
    ];

    return (
        <Navbar  onMenuOpenChange={setIsMenuOpen} className=' h-15  md:h-20 pt-0'>
            <NavbarContent className='mr-[15rem]'>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand className='flex justify-start'>
                    <Link href='/'><WebLogo /></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='hidden sm:flex gap-4 justify-end'>
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link href={item.link}>{item.name}</Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <Button as={Link} color='primary' href="/contact">Contact</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
