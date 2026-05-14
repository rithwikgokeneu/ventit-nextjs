'use client';

import { MenuIcon, XIcon, ChevronDown, Sparkles, BarChart3, ShieldCheck, Globe, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            subLinks: [
                { name: 'Context Engine', href: '/products/context-engine', icon: Sparkles, description: 'Inject brand facts into LLMs' },
                { name: 'Attribution Suite', href: '/products/attribution-suite', icon: BarChart3, description: 'Multi-touch AI attribution' },
                { name: 'Hallucination Guard', href: '/products/hallucination-guard', icon: ShieldCheck, description: 'Validate every brand mention' },
                { name: 'Publisher Network', href: '/products/publisher-network', icon: Globe, description: 'Earn revenue from AI citations' },
                { name: 'SDK & API', href: '/products/sdk-api', icon: Code2, description: 'Two-line integration' },
            ],
        },
        { name: 'Stories', href: '/stories' },
        { name: 'For Publishers', href: '/for-publishers' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Docs', href: '/docs' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <div className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${scrolled ? 'px-4 pt-3' : 'px-0 pt-0'}`}>
                <nav
                    className={`flex items-center justify-between bg-white/70 backdrop-blur-md transition-all duration-300 ease-out ${
                        scrolled
                            ? 'mx-auto max-w-5xl rounded-full border border-gray-200/70 px-4 py-2 shadow-lg shadow-black/5 md:px-6'
                            : 'w-full rounded-none border-b border-transparent px-4 py-3.5 md:px-16 lg:px-24'
                    }`}
                >
                    <Link href='/' className='flex items-center'>
                        <span
                            style={{ fontFamily: 'var(--font-cursive), cursive' }}
                            className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text font-bold tracking-tight text-transparent transition-all duration-300 ${
                                scrolled ? 'text-3xl' : 'text-4xl'
                            }`}
                        >
                            Vententit
                        </span>
                    </Link>

                    <div className={`hidden items-center text-gray-700 md:flex transition-all duration-300 ${scrolled ? 'space-x-5 text-sm' : 'space-x-7'}`}>
                        {links.map((link) => link.subLinks ? (
                            <div key={link.name} className='group relative' onMouseEnter={() => setOpenDropdown(link.name)} onMouseLeave={() => setOpenDropdown(null)}>
                                <div className='flex cursor-pointer items-center gap-1 hover:text-black'>
                                    {link.name}
                                    <ChevronDown className={`mt-px size-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                </div>

                                <div className={`absolute top-6 left-0 z-40 w-lg rounded-md border border-gray-100 bg-white p-3 shadow-lg transition-all duration-200 ease-in-out ${openDropdown === link.name ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                                    <p>Explore our AI tools</p>
                                    <div className='mt-3 grid grid-cols-2 gap-2'>
                                        {link.subLinks.map((sub) => (
                                            <Link href={sub.href} key={sub.name} className='group/link flex items-center gap-2 rounded-md p-2 transition hover:bg-gray-100'>
                                                <div className='w-max gap-1 rounded-md btn p-2'>
                                                    <sub.icon className='size-4.5 text-white transition duration-300 group-hover/link:scale-110' />
                                                </div>
                                                <div>
                                                    <p className='font-medium'>{sub.name}</p>
                                                    <p className='font-light text-gray-400'>{sub.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link key={link.name} href={link.href} className='transition hover:text-black'>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href='/'
                        className={`hidden rounded-full btn font-medium text-white transition hover:opacity-90 md:inline-block ${
                            scrolled ? 'px-5 py-1.5 text-sm' : 'px-8 py-2.5'
                        }`}
                    >
                        Sign Up
                    </Link>

                    <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                        <MenuIcon className='size-6.5' />
                    </button>
                </nav>
            </div>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <div key={link.name} className='text-center'>
                        {link.subLinks ? (
                            <>
                                <button onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)} className='flex items-center justify-center gap-1 text-gray-800'>
                                    {link.name}
                                    <ChevronDown className={`size-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === link.name && (
                                    <div className='mt-2 flex flex-col gap-2 text-left text-sm'>
                                        {link.subLinks.map((sub) => (
                                            <Link key={sub.name} href={sub.href} className='block text-gray-600 transition hover:text-black' onClick={() => setIsOpen(false)}>
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link href={link.href} className='block text-gray-800 transition hover:text-black' onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        )}
                    </div>
                ))}

                <Link href='/' className='rounded-full btn px-8 py-2.5 font-medium text-white transition hover:opacity-90' onClick={() => setIsOpen(false)}>
                    Sign Up
                </Link>

                <button onClick={() => setIsOpen(false)} className='rounded-md btn p-2 text-white ring-white active:ring-2'>
                    <XIcon />
                </button>
            </div>
        </>
    );
}
