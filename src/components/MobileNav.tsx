'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MobileNavProps {
  sections: { name: string; id: string; }[];
  onSectionClick: (sectionId: string) => void;
}

export default function MobileNav({ sections, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
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

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
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
          <div className="flex flex-col space-y-4 mt-8">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className="px-4 py-2 text-left text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Link
              href="/Harry_Leung_resume.pdf"
              target="_blank"
              className="px-4 py-2 text-left text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
