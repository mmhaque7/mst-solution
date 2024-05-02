import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import React, { useState } from 'react'
import WebLogo from './WebLogo';


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let menuItems = [
        { name: "Home", link: "/" },
        { name: "Work", link: "/work" },
        { name: "Services", link: "/services" },
        { name: "About Us", link: "/about" },
        { name: "Blog", link: "/blog" },
        { name: "Contact Us", link: "/contact" }

    ]
    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className='h-[7rem]'>
            <NavbarContent className='mr-[15rem]'>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand className='flex justify-start'>
                    <Link href='/'><WebLogo /></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='hidden sm:flex gap-5 justify-end'>
                <NavbarItem>
                    <Link href="/" >Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/work">Work</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/services">Services</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about">About Us</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/blog">Blog</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color='primary' href="/contact">Contact</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-1/3"

                            href={item.link}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    )

}
