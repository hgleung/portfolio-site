'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function MobileHeader() {
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
