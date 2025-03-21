'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

interface MobileNavProps {
  sections: { name: string; id: string; }[];
  onSectionClick: (sectionId: string) => void;
}

export default function MobileNav({ sections, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSectionClick = (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        onSectionClick(sectionId);
      }, 50);
    } else {
      onSectionClick(sectionId);
    }
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Full screen overlay */}
      <div 
        className={`fixed inset-0 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-sm bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6 border-b dark:border-gray-700">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className="px-4 py-3 text-left text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Link
              href="/notes"
              className="px-4 py-3 text-left text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
            >
              Notes
            </Link>
            <Link
              href="/Harry_Leung_resume.pdf"
              target="_blank"
              className="px-4 py-3 text-left text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
