import "~/styles/globals.css";

import { Montserrat } from "next/font/google";
import { Metadata } from "next";

import Link from 'next/link';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: 'Harry Leung | %s',
    default: 'Harry Leung',
  },
  description: "Computer Science student and Software Engineer located in the Bay Area.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full p-8 bg-ivory">
      <Link href="/" className="harry text-xl font-semibold">
        Harry Leung
      </Link>
      <div className="flex space-x-10">
      <Link href="/notes">
        Notes
       </Link>
       <Link href="/portfolio">
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
      <body className="flex flex-col gap-4 bg-ivory">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
