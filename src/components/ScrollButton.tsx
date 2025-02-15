'use client'

export default function ScrollButton() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const navHeight = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={scrollToAbout}
      className="flex flex-col items-center transition-colors duration-200 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-600"
    >
      <p className="mb-2 md:mb-4 text-sm font-light">Learn more about me</p>
      <svg 
        className="w-6 h-6 animate-bounce"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
}
