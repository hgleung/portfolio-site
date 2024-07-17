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

  return (
    <nav className="flex border-solid border-2 items-center justify-between w-full p-8 bg-light-gray">
      <Link href="/" className="harry text-xl font-semibold">
        Harry Leung<span className="blink">_</span>
      </Link>
      <div className="flex space-x-10 font-light text-charcoal">
      <Link href="/notes" className={pathname === '/notes' ? 'text-black font-normal underline' : 'no-underline'}>
        Notes
       </Link>
       <Link href="/portfolio" className={pathname === '/portfolio' ? 'text-black font-normal underline' : 'no-underline'}>
        Portfolio
       </Link>
       <Link href="/Harry_Leung_resume.pdf" target="_blank">
        Resume
       </Link>
      </div>
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
