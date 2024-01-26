// components/Navbar.js
"use client"
import { useEffect, useState } from 'react';

const NavbarCollapse = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useEffect(() => {
    //     // This effect will run on the client side
    //     const handleToggle = () => {
    //         setIsMenuOpen(!isMenuOpen);
    //     };

    //     const button = document.querySelector('[data-collapse-toggle="navbar-hamburger"]');
    //     // button.addEventListener('click', handleToggle);

    //     return () => {
    //         // Cleanup: remove the event listener when the component unmounts
    //         button.removeEventListener('click', handleToggle);
    //     };
    // }, [isMenuOpen]);

    return (
        <>
            <button
                type="button"
                className="flex md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none "
                aria-expanded={isMenuOpen}
                aria-controls="navbar-hamburger"
                data-collapse-toggle="navbar-hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={` ${isMenuOpen ? 'block md:hidden' : 'hidden'} w-full `} id="navbar-hamburger">
                <ul className="flex flex-col font-medium mt-4 rounded-lg flex-1 bg-transparent">
                    <li>
                        <a href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)} data-te-smooth-scroll-init className="bg-transparent block py-2 px-3 rounded text-gray-400 font-medium">About</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)} data-te-smooth-scroll-init className="block py-2 px-3 rounded text-gray-400 font-medium">Contact</a>
                    </li>
                    <li>
                        <a href="#experience" onClick={() => setIsMenuOpen(!isMenuOpen)} data-te-smooth-scroll-init className=" block py-2 px-3 rounded text-gray-400 font-medium">Experience</a>
                    </li>
                    <li>
                        <a href="#education" onClick={() => setIsMenuOpen(!isMenuOpen)} data-te-smooth-scroll-init className="block py-2 px-3 rounded text-gray-400 font-medium">Education</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={() => setIsMenuOpen(!isMenuOpen)} data-te-smooth-scroll-init className="block py-2 px-3 rounded text-gray-400 font-medium">Skills</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavbarCollapse;
