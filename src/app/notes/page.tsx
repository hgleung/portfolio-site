export const dynamic = "force-dynamic";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Notes',
};

interface NoteItem {
  title: string;
  description: string;
  path: string;
  date: string;
}

const notes: NoteItem[] = [
  {
    title: 'AI Art Detector Report',
    description: 'Technical report detailing the implementation and findings of the AI Art Detector project, including model architecture, training process, and results.',
    path: '/notes/ai-art-detector-report',
    date: '2025-03-20'
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-light-gray dark:bg-gray-900">
      <div className="w-full max-w-4xl pt-24 md:pt-12">
        <h1 className="text-3xl font-semibold mb-8 text-charcoal dark:text-gray-100">Notes</h1>
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