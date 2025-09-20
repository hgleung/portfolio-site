import { Metadata } from 'next';
import { ExternalLink, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Art Detector Project Report',
};

export default function Page() {
  return (
    <main className="max-w-[98%] md:max-w-[95%] mx-auto px-1.5 md:px-2.5 pt-28 md:pt-12 pb-16 bg-white dark:bg-black">
      <Link 
        href="/notes"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Notes</span>
      </Link>

      <h1 className="text-2xl font-normal mb-2 text-black dark:text-white">AI Art Detector Project Report</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">March 20, 2025</p>
      
      <div className="relative w-full aspect-[1/1.4] bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="absolute top-2 right-2 flex gap-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-md backdrop-blur-sm">
          <a 
            href="/neural_final_report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            title="Open PDF in new tab"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href="/neural_final_report.pdf"
            download="ai_art_detector_report.pdf"
            className="p-1.5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            title="Download PDF"
          >
            <Download size={20} />
          </a>
        </div>
        <iframe
          src="/neural_final_report.pdf"
          className="w-full h-full rounded-lg"
        />
      </div>
    </main>
  );
}