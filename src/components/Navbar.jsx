import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa' // Import icons

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
            <div className='max-w-7xl mx-auto flex h-14 items-center justify-between'>
                {/* Logo */}
                <a href="#" className='mr-6 flex items-center space-x-2'>
                    <img src={Logo} alt="Logo" className='w-56' />
                </a>

                {/* Desktop Navigation */}
                <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                    <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
                    <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
                    <a href="#certifications" className='transition-colors hover:text-foreground/80 text-foreground/60'>Certification</a>
                    <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>

                    {/* LinkedIn & GitHub Links */}
                    <a href="https://www.linkedin.com/in/niyazuddin-ansari-38459027a/" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-blue-600'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/Niyazuddin020622" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-900'>
                        <FaGithub size={24} />
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className='md:hidden inline-flex items-center justify-center rounded-md' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className='sr-only'>Open main menu</span>
                    {mobileMenuOpen ? <X className='h-6 w-6' aria-hidden="true" /> : <Menu className='h-6 w-6' aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className='md:hidden'>
                    <div className='space-y-1 px-2 pb-3 pt-2'>
                        <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>About</a>
                        <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Projects</a>
                        <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Testimonials</a>
                        <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Contact</a>

                        {/* LinkedIn & GitHub in Mobile Menu */}
                        <div className='flex justify-center space-x-4 mt-4'>
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-blue-600'>
                                <FaLinkedin size={28} />
                            </a>
                            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-900'>
                                <FaGithub size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
