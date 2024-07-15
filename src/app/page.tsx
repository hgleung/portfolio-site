export const dynamic = "force-dynamic";
import Footer from '../components/Footer';

export default function HomePage() {
  // const posts = await db.query.posts.findMany();

  // console.log(posts);
  return (
    <main className="flex max-w-lg flex-col items-center self-center justify-center bg-ivory text-black">
      Hey, I'm Harry! I am currently studying Computer Science at UC Irvine with a specialization in Intelligent Systems.
      In the past, I've worked in Software QA as an intern at Litepoint. Feel free to reach out!
      <Footer />
    </main>
  );
}