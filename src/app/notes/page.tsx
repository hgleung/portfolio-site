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
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-white dark:bg-black">
      <div className="w-full max-w-4xl pt-24 md:pt-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-3xl font-semibold mb-4 text-charcoal dark:text-gray-100">My Notes</h1>
        
        <div className="mb-12 prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300">
            This is where I keep my technical notes, project reports, and thoughts on things I've built. 
            I like to write about what I learn while working on different projects, both to organize my own thinking and to share what I've figured out along the way.
          </p>
        </div>

        <div className="grid gap-6">
          {notes.map((note) => (
            <Link 
              key={note.path}
              href={note.path}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-medium text-charcoal dark:text-gray-100">{note.title}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{note.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{note.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}