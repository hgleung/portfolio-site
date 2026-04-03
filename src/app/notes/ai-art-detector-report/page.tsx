import { Metadata } from 'next';
import { ExternalLink, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Art Detector Project Report',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-24 md:pt-16 pb-24">
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Notes</span>
      </Link>

      <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">AI Art Detector Project Report</h1>
      <p className="text-sm text-muted-foreground mb-10">March 20, 2025</p>

      <div className="relative w-full aspect-[1/1.4] rounded-lg border border-border/60 overflow-hidden">
        <div className="absolute top-3 right-3 flex gap-2 p-1.5 bg-background/80 backdrop-blur-sm rounded-md border border-border/50 z-10">
          <a
            href="/neural_final_report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Open PDF in new tab"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href="/neural_final_report.pdf"
            download="ai_art_detector_report.pdf"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Download PDF"
          >
            <Download size={16} />
          </a>
        </div>
        <iframe
          src="/neural_final_report.pdf"
          className="w-full h-full"
        />
      </div>
    </main>
  );
}
