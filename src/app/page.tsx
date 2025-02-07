import { Metadata } from 'next';
import BrowserWindow from '../components/window';
import Skills from '../components/skills';
import { experienceTabs } from '../data/experience';

export const metadata: Metadata = {
  title: {
    template: 'Harry Leung | %s',
    default: 'Harry Leung',
  },
  description: 'Computer Science student and Software Engineer located in the Bay Area.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function HomePage() {
  return (
    <main className="max-w-80 md:max-w-4xl mx-auto font-light items-center self-center justify-center bg-ivory text-charcoal pt-32 pb-[50vh]">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Profile Picture */}
        <div className="w-64 h-64 rounded-full overflow-hidden mb-8 mt-12">
          <img 
            src="/IMG_6757.png"
            alt="Harry Leung"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-600 via-green-500 to-lime-400 bg-clip-text text-transparent animate-text py-2">
          Hi, I'm Harry.
        </h1>
        <div className="flex space-x-3 mt-4">
          <a 
            href="https://github.com/hgleung" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/harrygleung/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            LinkedIn
          </a>
        </div>
        <div className="mt-12 flex flex-col items-center text-gray-600">
          <p className="mb-4 text-sm font-light">Learn more about me</p>
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
        </div>
      </div>
      <div id="about" className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 pt-6 md:pt-12 md:pb-12 w-full">
        <h4 className="col-span-2 font-extrabold md:font-medium">About</h4>
        <div className="col-span-10">
          <p className="mb-4">
            I am a Computer Science student at UC Irvine specializing in Intelligent Systems. My passion lies in developing innovative solutions that bridge the gap between cutting-edge technology and practical applications.
          </p>
          <p className="mb-4">
            With a strong foundation in software development and a keen interest in AI/ML, I strive to create impactful solutions that make a difference. I'm particularly excited about the intersection of artificial intelligence and software engineering.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
          </p>
        </div>
      </div>
      <div id="skills" className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 md:pb-12">
        <h4 className="col-span-2 font-extrabold md:font-medium pt-8 md:pt-0">Skills</h4>
        <div className="col-span-10">
          <Skills />
        </div>
      </div>
      <div id="experience" className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 md:pb-12">
        <h4 className="col-span-2 font-extrabold md:font-medium pt-8 md:pt-0">Experience</h4>
        <div className="col-span-10">
          <BrowserWindow tabs={experienceTabs} />
        </div>
      </div>
      <div id="contact" className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 md:pb-12">
        <h4 className="col-span-2 font-extrabold md:font-medium pt-8 md:pt-0">Contact</h4>
        <div className="col-span-10">
          <div className="border border-gray-200 rounded-lg bg-white shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:hleung.cs@gmail.com" 
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-3 group-hover:bg-green-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 mb-1">Email</span>
                <span className="text-sm text-gray-500">hleung.cs@gmail.com</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/harrygleung/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-3 group-hover:bg-blue-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 mb-1">LinkedIn</span>
                <span className="text-sm text-gray-500">harrygleung</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}