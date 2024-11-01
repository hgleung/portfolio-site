import Footer from '../components/Footer';
import { Metadata } from 'next';
import BrowserWindow from '../components/window';

export const metadata: Metadata = {
  title: {
    template: 'Harry Leung | %s',
    default: 'Harry Leung',
  },
  description: "Computer Science student and Software Engineer located in the Bay Area.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function HomePage() {
  // const posts = await db.query.posts.findMany();

  // console.log(posts);
  return (
    <main className="max-w-80 md:max-w-xl font-light items-center self-center justify-center bg-ivory text-charcoal">
      <div className='grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 pt-4 md:pt-12 md:pb-12'>
        <h4 className='col-span-2'> </h4>
        <div className='col-span-10'>
        Hey, I'm Harry! I am currently studying Computer Science at UC Irvine with a specialization in Intelligent Systems.
        In the past, I've worked in Software QA as an intern at Litepoint. I am currently located in the Bay Area. Feel free to reach out!
        </div>
        </div>
      <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 md:pb-12">
        <h4 className='col-span-2 font-extrabold md:font-medium pt-8 md:pt-0'>Online</h4>
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
      <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 pb-4 md:pb-12">
        <h3 className='col-span-2 text-xl font-extrabold md:font-medium pt-8 md:pt-0'>Experience</h3>
      </div>
      <div>
        <BrowserWindow url="Litepoint">
          <p>Details added soon.</p>
        </BrowserWindow>
      </div>
      {/* <div className="grid items-start grid-cols-1 md:grid-cols-12">
        <h4 className='col-span-2'>Where</h4>
        <div className="col-span-10">
          <img className='rounded-lg' alt='Map of Irvine, CA with blue location dot in the middle'></img>
        </div>
      </div> */}
    </main>
  );
}