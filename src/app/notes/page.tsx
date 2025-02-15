export const dynamic = "force-dynamic";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
};

export default function Page() {
  // const posts = await db.query.posts.findMany();

  // console.log(posts);
  return (
    <main className="flex flex-col items-center justify-center bg-ivory text-black">
      My Notes (in construction)
    <Footer />
    </main>
  );
}