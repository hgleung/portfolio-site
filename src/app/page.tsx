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
    <main className="max-w-80 md:max-w-4xl mx-auto font-light items-center self-center justify-center bg-ivory text-charcoal pt-32">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Profile Picture Placeholder */}
        <div className="w-48 h-48 rounded-full bg-gray-200 mb-8 mt-12">
          {/* Image will go here */}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-600 via-green-500 to-lime-400 bg-clip-text text-transparent animate-text py-2">
          Hi, I'm Harry.
        </h1>
      </div>
      <div id="about" className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 pt-4 md:pt-12 md:pb-12 w-full">
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
          <div className="flex flex-col space-y-3">
            <a href="mailto:hleung.cs@gmail.com" className="flex items-center space-x-2 md:space-x-4 group">
              <strong className="flex-none font-normal md:font-light">
                Email: hleung.cs@gmail.com
              </strong>
              <span className="w-full border-t border-gray-800 border-dashed shrink"></span>
              <span className="flex-none text-tertiary text-sm md:text-base">
                Send
              </span>
            </a>
            <a href="https://github.com/hgleung" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              <strong className="flex-none font-normal md:font-light">
                GitHub
              </strong>
              <span className="w-full border-t border-gray-800 border-dashed shrink"></span>
              <span className="flex-none text-tertiary text-sm md:text-base">
                Follow
              </span>
            </a>
            <a href="https://www.linkedin.com/in/harrygleung/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              <strong className="flex-none font-normal md:font-light">
                LinkedIn
              </strong>
              <span className="w-full border-t border-gray-800 border-dashed shrink"></span>
              <span className="flex-none text-tertiary text-sm md:text-base">
                Connect
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}