'use client';

import { usePathname, useRouter } from "next/navigation";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../components/ThemeProvider';
import Waveform from '../components/Waveform';
import React from 'react';

const sections = [
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
        if (element) scrollToElement(element);
      }, 300);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) scrollToElement(element);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-56 px-8 py-10 flex flex-col justify-between bg-background border-r border-border/50">
      <div>
        <Link href="/" className="block mb-14 text-base font-medium tracking-tight text-foreground hover:text-foreground">
          Harry Leung
        </Link>

        <nav className="flex flex-col space-y-5">
          <Link
            href="/notes"
            className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${pathname === '/notes' || pathname.startsWith('/notes/') ? 'text-foreground font-medium' : ''}`}
          >
            Notes
          </Link>
          <Link
            href="/Harry_Leung_resume.pdf"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </Link>
          <div className="pt-4 border-t border-border/50">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block text-left text-sm mt-5 transition-colors
                  ${activeSection === item.id
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>

      <ThemeToggle />
    </div>
  )
}

function MobileHeader() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 px-6 py-4 bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-base font-medium tracking-tight text-foreground">
          Harry Leung
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-1"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-[57px] left-0 right-0 bg-background border-b border-border/50 z-50 p-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/notes" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                Notes
              </Link>
              <Link href="/Harry_Leung_resume.pdf" target="_blank" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                Resume
              </Link>
              <div className="pt-4 border-t border-border/50">
                <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-foreground block">
                  Contact
                </Link>
              </div>
              <div className="pt-4 border-t border-border/50">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider>
          <div className="hidden md:block">
            <SideNav />
          </div>
          <MobileHeader />
          <Waveform />
          <div className="md:ml-56">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
