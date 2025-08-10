'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname()

  useEffect(() => {
    // Reset active section when not on home page
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const observers = new Map()
    let visibleSections = new Set<string>()

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id
        
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          visibleSections.add(sectionId)
        } else {
          visibleSections.delete(sectionId)
        }
      })

      // If no sections are visible, clear the active section
      if (visibleSections.size === 0) {
        setActiveSection('')
        return
      }

      // Find the first visible section in our original order
      const activeSection = sectionIds.find(id => visibleSections.has(id))
      if (activeSection) {
        setActiveSection(activeSection)
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -15% 0px',
      threshold: [0, 0.3, 0.6, 1.0]
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
        observers.set(id, element)
      }
    })

    return () => {
      observers.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [sectionIds, pathname]) // Add pathname to dependencies

  return activeSection
}
