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
    description: 'Designing and implementing a toy programming language from scratch, featuring parsing, interpretation, and LLVM IR generation.',
    path: '/notes/toy-lang-blog',
    date: '2025-05-29'
  },
  {
    title: 'AI Art Detector Report',
    description: 'A breakdown of how we built a classifier to tell AI-generated art from human-made — architecture decisions, training, and what actually worked.',
    path: '/notes/ai-art-detector-report',
    date: '2025-03-20'
  },
];

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-24 md:pt-16 pb-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Home</span>
      </Link>

      <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Notes</h1>
      <p className="text-[15px] text-foreground/70 mb-10 leading-relaxed">
        Technical notes, project reports, and thoughts on things I've built.
      </p>

      <div className="space-y-4">
        {notes.map((note) => (
          <Link
            key={note.path}
            href={note.path}
            className="block rounded-lg border border-border/60 p-5 transition-all duration-200 hover:border-border hover:shadow-sm hover:shadow-black/[0.03] dark:hover:shadow-white/[0.02]"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1.5">
              <h2 className="text-base font-medium text-foreground">{note.title}</h2>
              <span className="text-sm text-muted-foreground">{note.date}</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">{note.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
