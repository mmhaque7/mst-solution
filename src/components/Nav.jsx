import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import React, { useState } from 'react'


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let menuItems = [
        "Home",
        "Work",
        "Services",
        "About us",
        "Blog",
        "Contact Us"

    ]
    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
                <NavbarBrand>
                    <p className="font-bold text-inherit hover:">WebSolution</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='hidden sm:flex gap-4 justify-end'>
                <NavbarItem>
                    <Link href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/work">Work</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/services">Services</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about">About-us</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/blog">Blog</Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    )

}
