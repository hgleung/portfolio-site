'use client';

import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

const sections = [
  { name: 'Contact', id: 'contact' },
];

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  const activeSection = useActiveSection(sections.map(s => s.id));

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
  );
}
