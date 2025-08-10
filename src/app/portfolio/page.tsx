import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function Page() {
  // const posts = await db.query.posts.findMany();

  // console.log(posts);
  return (
    <main className="flex flex-col items-center justify-center bg-ivory text-black">
      Portfolio Page (in construction)
    </main>
  );
}