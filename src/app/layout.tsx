'use client';

import { usePathname, useRouter } from "next/navigation";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../components/ThemeProvider';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sections = [
  // { name: 'About', id: 'about' },
  // { name: 'Skills', id: 'skills' },
  // { name: 'Experience', id: 'experience' },
  // { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

function SideNav() {
  const pathname = usePathname()
  const router = useRouter()
  const activeSection = useActiveSection(sections.map(s => s.id))
  
  const scrollToSection = async (sectionId: string) => {
    const scrollToElement = (element: HTMLElement) => {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    if (pathname !== '/') {
      await router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          scrollToElement(element);
        }
      }, 300);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      scrollToElement(element);
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 p-10 flex flex-col justify-between bg-white dark:bg-black">
      <div>
        <Link href="/" className="block mb-16 text-xl font-normal text-black dark:text-white">
          Harry Leung<span className="blink">_</span>
        </Link>
        
        <nav className="flex flex-col space-y-6">
          <Link 
            href="/notes" 
            className="block font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Notes
          </Link>
          <Link 
            href="/Harry_Leung_resume.pdf" 
            target="_blank" 
            className="font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Resume
          </Link>
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-200 mt-6
                  ${activeSection === item.id ? 'font-medium' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
      
      <div className="absolute bottom-10 left-10">
        <ThemeToggle />
      </div>
    </div>
  )
}

// Mobile navigation component for small screens
function MobileHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 p-6 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-normal text-black dark:text-white">
          Harry Leung<span className="blink">_</span>
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-black dark:text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black p-6 border-b border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col space-y-6">
            <Link
              href="/notes" 
              className="font-normal text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              Notes
            </Link>
            <Link 
              href="/Harry_Leung_resume.pdf" 
              target="_blank" 
              className="font-normal text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link
                key="contact"
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="font-normal text-black dark:text-white mt-6 block"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider>
          <div className="hidden md:block">
            <SideNav />
          </div>
          <MobileHeader />
          <div className="md:ml-64">
            {children}
          </div>
          {/* Mobile theme toggle fixed to bottom left */}
          <div className="md:hidden fixed bottom-6 left-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
