import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

// Dynamically import heavy components
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="h-[300px] w-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>
});

// Import Skills component
import Skills from '../components/Skills';

export const metadata: Metadata = {
  title: {
    template: 'Harry Leung | %s',
    default: 'Harry Leung',
  },
  description: 'Software Engineer located in the Bay Area.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function HomePage() {
  return (
    <main className="max-w-[98%] md:max-w-[95%] mx-auto px-1.5 md:px-2.5 pt-28 md:pt-12 pb-16">
      {/* Introduction and About Section */}
      <div className="flex flex-col md:flex-row mb-10">
        {/* Left side - About content */}
        <div className="md:w-2/3 md:pr-2">
          {/* About Section */}
          <section id="about" className="mb-6">
            <h2 className="text-2xl font-normal mb-4 text-black dark:text-white">About</h2>
            
            <div className="relative">
              {/* Mobile profile picture and social links (right aligned) */}
              <div className="md:hidden float-right ml-6 mb-6 w-40">
                <div className="w-40 h-40 rounded-lg overflow-hidden">
                  <Image 
                    src="/IMG_2161.PNG"
                    alt="Harry Leung"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex space-x-6">
                    <a 
                      href="https://github.com/hgleung" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xl"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/harrygleung/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xl"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="mailto:hleung.cs@gmail.com" 
                      className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xl"
                      aria-label="Email"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* About text */}
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  UCI Computer Science graduate. I'm passionate about turning complex ideas into practical applications that people actually want to use.
                </p>
                <p>
                  My current obsession is exploring how AI can enhance developer tools. I'm constantly experimenting with new ways to make coding more intuitive and building random apps that solve problems I encounter in daily life.
                </p>
                <p>
                  Currently looking for work. Always looking for new challenges that push me to grow as both an engineer and a creative thinker.
                </p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Right side - Profile picture and social links */}
        <div className="md:w-1/3 hidden md:flex flex-col items-center md:pl-1">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden mb-4">
            <Image 
              src="/IMG_2161.PNG"
              alt="Harry Leung"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div className="flex space-x-5 mt-3">
            <a 
              href="https://github.com/hgleung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/harrygleung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:hleung.cs@gmail.com" 
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="mb-10">
        <h2 className="text-2xl font-normal mb-3 text-black dark:text-white">Skills</h2>
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-10 pr-8 md:pr-12">
        <h2 className="text-2xl font-normal mb-3 text-black dark:text-white">Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-medium text-black dark:text-white">Software Engineer Intern</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 pr-4 md:pr-8">Jun. 2023 - Sep. 2023</span>
            </div>
            <div className="text-base font-medium text-gray-600 dark:text-gray-400 mb-1">Teradyne Inc. (Litepoint Division) • San Jose, CA</div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Enhanced data visualization and regression analysis by developing a Tkinter-based GUI tool, reducing onboarding time for new engineers by 30% and improving decision-making speed</li>
              <li>Reduced query response time by 96% through Apache Cassandra integration, optimizing storage/retrieval of regression tester data for 100+ GB datasets</li>
              <li>Increased team efficiency by 25% by streamlining deployment workflows for internal tools, introducing lightweight DevOps practices</li>
              <li>Designed and implemented responsive Tkinter interfaces with intuitive layouts, decreasing training requirements for new users from 2 hours to under 45 minutes</li>
              <li>Integrated Matplotlib to generate actionable visual reports within a full stack internal application, accelerating root-cause analysis for performance issues by 40%</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-medium text-black dark:text-white">Education</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 pr-4 md:pr-8">Sep. 2021 - Jun. 2025</span>
            </div>
            <div className="text-base font-medium text-gray-600 dark:text-gray-400 mb-1">University of California, Irvine</div>
            <div className="mb-1 text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Science</div>
            <div className="mb-1 text-gray-700 dark:text-gray-300 italic">Specialization: Intelligent Systems</div>
            <div className="mb-2 text-gray-700 dark:text-gray-300">Major GPA: 3.76</div>
            
            <div className="mb-1 font-medium text-gray-700 dark:text-gray-300">Relevant Coursework:</div>
            
            {/* AI and ML */}
            <div className="mb-2">
              <div className="font-medium text-gray-700 dark:text-gray-300 mb-1">Artificial Intelligence & Machine Learning</div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-2 space-y-0.5">
                <li>Artificial Intelligence</li>
                <li>Machine Learning & Data Mining</li>
                <li>Neural Networks & Deep Learning</li>
                <li>Graphical Models</li>
              </ul>
            </div>
            
            {/* Systems */}
            <div className="mb-2">
              <div className="font-medium text-gray-700 dark:text-gray-300 mb-1">Systems & Architecture</div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-2 space-y-0.5">
                <li>Computer Organization and Principles of System Design</li>
                <li>Operating Systems</li>
                <li>Projects in Operating Systems</li>
                <li>Computer & Communication Networks</li>
                <li>Network</li>
              </ul>
            </div>
            
            {/* Core CS */}
            <div>
              <div className="font-medium text-gray-700 dark:text-gray-300 mb-1">Core Computer Science</div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-2 space-y-0.5">
                <li>Data Structures & Algorithms</li>
                <li>Database Systems</li>
                <li>Information Retrieval</li>
                <li>Applications of Probability in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-10 pr-8 md:pr-12">
        <h2 className="text-2xl font-normal mb-4 text-black dark:text-white">Projects</h2>
        <div className="space-y-8">
          {/* Toy Language Project */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Toy Programming Language</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A toy programming language with a custom lexer, parser, and interpreter in Python. Supports variable declarations, arithmetic, control flow, functions (including recursion), error handling, and outputs LLVM IR for further compilation.
            </p>
            <div className="mb-2">
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Python</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Parsing</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Interpreter</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">LLVM</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/notes/toy-lang-blog" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Read more
              </Link>
              <a 
                href="https://github.com/hgleung/toy-lang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
              >
                GitHub <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          </div>
          
          {/* UCI ICS Search Engine */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">UCI ICS Search Engine</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A high-performance search engine for the UCI ICS domain with multi-threaded processing of 56,000+ documents and efficient indexing. Features TF-IDF scoring, HTML tag weighting, URL normalization, and near-duplicate detection with &lt;100ms query response time.
            </p>
            <div className="mb-2">
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Python</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Multi-threading</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">TF-IDF</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Information Retrieval</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/hgleung/ics-search-engine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
              >
                GitHub <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          </div>

          {/* OS Projects */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">OS Projects - VM Manager & File System</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Low-level system implementations including a Virtual Memory Manager with two-level paging, page fault handling, LFU replacement, and dynamic memory management. Also includes a File System Emulator with disk block management and bitmap-based allocation.
            </p>
            <div className="mb-2">
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Python</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Memory Management</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">File Systems</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Algorithms</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/hgleung/os-projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
              >
                GitHub <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          </div>
          
          {/* AI Art Detector */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">AI Art Detector</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A deep learning system that classifies artwork as AI-generated or human-made using a custom CNN and Vision Transformer (ViT). Features adaptive pooling for flexible input sizes, data augmentation, and experiment tracking with WandB.
            </p>
            <div className="mb-2">
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">PyTorch</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">CNN</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Vision Transformer</span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">Deep Learning</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/notes/ai-art-detector-report" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Read more
              </Link>
              <a 
                href="https://github.com/hgleung/ai-art-detector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
              >
                GitHub <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-10">
        <h2 className="text-2xl font-normal mb-4 text-black dark:text-white">Contact Me</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-20 text-gray-600 dark:text-gray-400">Email:</span>
            <a href="mailto:hleung.cs@gmail.com" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
              hleung.cs@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="w-20 text-gray-600 dark:text-gray-400">X:</span>
            <a 
              href="https://x.com/hleung_dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 flex items-center"
            >
              @hleung_dev <FaExternalLinkAlt className="ml-1" />
            </a>
          </div>
          <div className="flex items-center">
            <span className="w-20 text-gray-600 dark:text-gray-400">LinkedIn:</span>
            <a 
              href="https://www.linkedin.com/in/harrygleung/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 flex items-center"
            >
              harrygleung <FaExternalLinkAlt className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}