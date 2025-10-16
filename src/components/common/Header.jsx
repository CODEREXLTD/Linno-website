'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside or on link
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav') && !event.target.closest('button[aria-label="Toggle menu"]')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Products', href: '/products' },
        // { label: 'Blog', href: '/blog' },
        { label: 'Career', href: '/careers' },
        { label: 'Contact Us', href: '/contact' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    const isActiveRoute = (href) => {
        if (href === '/' && pathname === '/') {
            return true;
        }
        if (href !== '/' && pathname.startsWith(href)) {
            return true;
        }
        return false;
    };

    return (
        <header className={`linno-header w-full sticky top-0 z-50 ${scrolled ? 'fixed-header' : ''}`}>
            <div className="linno-container">
                <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">
                    {/* Logo */}
                    <div className="w-[80px] sm:w-[120px] md:w-[150px] lg:w-[174px] flex-shrink-0">
                        <Link href="/" className="block">
                            <Image
                                src="/images/logo.svg"
                                alt="Linno Logo"
                                width={140}
                                height={40}
                                className="hover:scale-105 transition-transform duration-200"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Hamburger Menu Icon (Mobile only) */}
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 transition-colors duration-200"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    >
                        <svg
                            className={`w-6 h-6 text-global-5 transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Navigation Menu */}
                    <nav
                        className={`${menuOpen ? 'block opacity-100 translate-y-0' : 'hidden lg:block opacity-0 lg:opacity-100 -translate-y-4 lg:translate-y-0'
                            } 
            absolute lg:relative 
            top-full lg:top-auto 
            left-0 lg:left-auto 
            w-full lg:w-auto 
            bg-white/95 lg:bg-transparent 
            backdrop-blur-md lg:backdrop-blur-none
            shadow-lg lg:shadow-none 
            z-50 lg:z-auto
            transform lg:transform-none
            transition-all duration-300 ease-in-out
            border-t lg:border-t-0 border-gray-200
            `}
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 xl:gap-8 p-4 lg:p-0 items-stretch lg:items-center max-h-[calc(100vh-80px)] lg:max-h-none overflow-y-auto lg:overflow-visible">
                            {menuItems?.map((item, index) => {
                                const isActive = isActiveRoute(item.href);
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={handleMenuItemClick}
                                        className={`
                      block lg:inline-block
                      px-4 py-3 lg:px-2 lg:py-1
                      text-base lg:text-sm xl:text-base 
                      font-sora
                      leading-tight
                      ${isActive
                                                ? 'text-[#3433fe] bg-[#3433fe]/10 lg:bg-transparent lg:text-[#3433fe] font-semibold lg:border-b-2 lg:border-[#3433fe]'
                                                : 'text-global-5 hover:text-[#3433fe] hover:bg-gray-100 lg:hover:bg-transparent font-normal'
                                            }
                      rounded-md lg:rounded-none
                      transition-all duration-200 
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-[#3433fe] 
                      focus:ring-opacity-50
                      border-b lg:border-b-0 
                      border-gray-100 
                      last:border-b-0
                      text-center lg:text-left
                      whitespace-nowrap
                    `}
                                        role="menuitem"
                                    >
                                        {item?.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {menuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};

export default Header;