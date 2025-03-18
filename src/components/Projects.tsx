'use client'

import { useState } from 'react'
import { FaGithub, FaPlay } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrls: string[]
  githubUrls: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    title: 'UCI ICS Search Engine',
    description: 'A high-performance search engine tailored for the UCI ICS domain featuring multi-threaded document processing of over 56,000 documents and efficient indexing with an average query response time of under 100 ms. Implements advanced TF-IDF scoring with HTML tag importance weighting, URL normalization, and near-duplicate detection using cosine similarity. The system efficiently manages memory through partial index off-loading and smart batched processing.',
    technologies: ['Python', 'NLTK', 'BeautifulSoup4', 'Multi-threading', 'TF-IDF', 'Porter Stemmer', 'Binary I/O', 'Cosine Similarity', 'Information Retrieval'],
    imageUrls: ['/project-images/search-engine.png'],
    githubUrls: [{ label: 'View on GitHub', url: 'https://github.com/hgleung/ICS-Search-Engine' }]
  },
  {
    title: 'Operating Systems Projects - VM Manager & File System Emulator',
    description: 'A collection of low-level system implementations simulated in Python including a Virtual Memory Manager and File System Emulator. The VM Manager handles memory allocation, segment/page table management, and disk operations, while the File System Emulator implements disk block management, file descriptors, and bitmap-based allocation.',
    technologies: ['Python', 'Data Structures', 'Algorithms', 'Memory Management', 'File Systems'],
    imageUrls: ['/project-images/filesystem1.jpg', '/project-images/vmtlb1v2.1.jpeg'],
    githubUrls: [
      { label: 'VM Manager', url: 'https://github.com/hgleung/vm-manager' },
      { label: 'FS Emulator', url: 'https://github.com/hgleung/fs-emulator' }
    ]
  },
  {
    title: 'AI Art Detector',
    description: 'A deep learning system that classifies artwork as AI-generated or human-made using two approaches: a custom CNN and a Vision Transformer (ViT). Features include flexible input sizes through adaptive pooling, data augmentation for training, and experiment tracking with WandB. The models use batch normalization, dropout for regularization, and custom classification heads for binary classification.',
    technologies: ['PyTorch', 'Hugging Face Transformers', 'CNN', 'Vision Transformer', 'WandB', 'Deep Learning'],
    imageUrls: [''],
    githubUrls: [{ label: 'View on GitHub', url: 'https://github.com/hgleung/AI-Art-Detector' }]
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Carousel */}
      <div className="relative">
        {/* Image Section */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-900">
          {projects[currentIndex] && projects[currentIndex].imageUrls.length > 0 ? (
            <div className="w-full h-full flex">
              {(() => {
                const currentProject = projects[currentIndex];
                return currentProject.imageUrls.map((url, idx) => (
                  <div key={idx} className="flex-1 p-2">
                    <img
                      src={url}
                      alt={`${currentProject.title} - Preview ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ));
              })()}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Project Preview</span>
            </div>
          )}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
          >
            <IoIosArrowBack className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
          >
            <IoIosArrowForward className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex 
                    ? 'bg-gray-800 dark:bg-gray-200' 
                    : 'bg-gray-400 dark:bg-gray-400/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{projects[currentIndex]?.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{projects[currentIndex]?.description}</p>
          
          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {projects[currentIndex]?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Links and Demo Button */}
          <div className="flex justify-end gap-3">
            {projects[currentIndex]?.githubUrls.map((github, index) => (
              <a
                key={index}
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                {github.label}
              </a>
            ))}
            {currentIndex === 0 && (
              <button
                disabled
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-light text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-600 cursor-not-allowed"
                title="Demo coming soon!"
              >
                <FaPlay className="w-4 h-4 mr-2" />
                Try it here!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
