'use client';

import { usePathname } from "next/navigation";
import "~/styles/globals.css";

import { Montserrat } from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

function TopNav() {
  const pathname = usePathname()
  
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
    <nav className="fixed top-0 left-0 right-0 flex border-solid border-b-2 items-center justify-between w-full p-8 bg-light-gray/95 backdrop-blur-sm z-50">
      <div className="flex items-center space-x-10">
        <Link href="/" className="harry text-xl font-semibold">
          Harry Leung<span className="blink">_</span>
        </Link>
        {[
          { name: 'About', id: 'about' },
          { name: 'Skills', id: 'skills' },
          { name: 'Experience', id: 'experience' },
          { name: 'Contact', id: 'contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="font-light text-charcoal hover:text-green-600 transition-colors duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>
      <Link href="/Harry_Leung_resume.pdf" target="_blank" className="font-light text-charcoal hover:text-green-600 transition-colors duration-200">
        Resume
      </Link>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat}`}>
      <body className="flex flex-col gap-4 bg-light-gray">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
