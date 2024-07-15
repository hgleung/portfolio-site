export const dynamic = "force-dynamic";
import Footer from '../components/Footer';

export default function HomePage() {
  // const posts = await db.query.posts.findMany();

  // console.log(posts);
  return (
    <main className="flex flex-col items-center self-center justify-center bg-ivory text-black">
      <div>
        {/* <img src="./head.png" width={200} height={200} className='pb-4'></img> */}
      </div>
      <div className='max-w-sm md:max-w-lg md:flex pb-10'>
      Hey, I'm Harry! I am currently studying Computer Science at UC Irvine with a specialization in Intelligent Systems.
      In the past, I've worked in Software QA as an intern at Litepoint. I am currently located in the Bay Area. Feel free to reach out!
      </div>
      <div>
      </div>
      <div className="grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-12">
        <div className="col-span-12">
          <div className="flex flex-col space-y-3">
            <a href="mailto:hleung.cs@gmail.com" className="flex items-center space-x-4 group">
              <strong className="flex-none font-medium" >
                Email: hleung.cs@gmail.com
              </strong>
            <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800"></span>
            <span className="flex-none text-tertiary text-sm md:text-base">
              Send
            </span>
            </a>
            <a href="https://github.com/hgleung" className="flex items-center space-x-4 group">
              <strong className="flex-none font-medium">
                GitHub
              </strong>
            <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800"></span>
            <span className="flex-none text-tertiary text-sm md:text-base">
              Follow
            </span>
            </a>
            <a href="https://www.linkedin.com/in/harrygleung/" className="flex items-center space-x-4 group">
              <strong className="flex-none font-medium">
                LinkedIn
              </strong>
            <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800"></span>
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