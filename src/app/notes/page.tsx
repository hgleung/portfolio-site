export const dynamic = "force-dynamic";
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My Notes',
};

interface NoteItem {
  title: string;
  description: string;
  path: string;
  date: string;
}

const notes: NoteItem[] = [
  {
    title: 'Building a Toy Language: Design, Parsing, and LLVM',
    description: 'A blog post about designing and implementing a toy programming language from scratch, featuring parsing, interpretation, and LLVM IR generation.',
    path: '/notes/toy-lang-blog',
    date: '2025-05-29'
  },
  {
    title: 'AI Art Detector Report',
    description: 'Technical report detailing the implementation and findings of the AI Art Detector project, including model architecture, training process, and results.',
    path: '/notes/ai-art-detector-report',
    date: '2025-03-20'
  },
];

export default function Page() {
  return (
    <main className="max-w-[98%] md:max-w-[95%] mx-auto px-1.5 md:px-2.5 pt-28 md:pt-12 pb-16 bg-white dark:bg-black">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-2xl font-normal mb-2 text-black dark:text-white">My Notes</h1>
      
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          This is where I keep my technical notes, project reports, and thoughts on things I've built. 
          I like to write about what I learn while working on different projects, both to organize my own thinking and to share what I've figured out along the way.
        </p>
      </div>

      <div className="grid gap-6">
        {notes.map((note) => (
          <Link 
            key={note.path}
            href={note.path}
            className="block p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <div className="mb-1">
              <h2 className="text-lg font-medium text-black dark:text-white">{note.title}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">{note.date}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{note.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}