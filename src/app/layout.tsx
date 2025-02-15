'use client';

import { usePathname } from "next/navigation";
import "~/styles/globals.css";

import { Montserrat } from "next/font/google";
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';
import MobileNav from '../components/MobileNav';
import { ThemeProvider } from '../components/ThemeProvider';
import ThemeToggle from '../components/ThemeToggle';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

const sections = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

function TopNav() {
  const pathname = usePathname()
  const activeSection = useActiveSection(sections.map(s => s.id))
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 96; // 8 * 2 padding + some extra space
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex border-solid border-b-2 border-gray-200 dark:border-gray-700 items-center w-full p-8 bg-light-gray/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-gray-100" style={{ zIndex: 9997 }}>
      <div className="flex items-center space-x-10">
        <Link href="/" className="harry text-xl font-semibold text-charcoal dark:text-green-400">
          Harry Leung<span className="blink">_</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-light text-charcoal dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 px-3 py-1 rounded-md relative
                ${activeSection === item.id ? 'text-green-600 dark:text-green-400' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center ml-auto">
        <Link 
          href="/Harry_Leung_resume.pdf" 
          target="_blank" 
          className="font-light text-charcoal dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
        >
          Resume
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden ml-auto">
        <MobileNav sections={sections} onSectionClick={scrollToSection} />
      </div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat}`}>
      <body className="flex flex-col gap-4 bg-light-gray dark:bg-gray-900">
        <ThemeProvider>
          <TopNav />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
