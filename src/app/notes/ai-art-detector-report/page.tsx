import { Metadata } from 'next';
import { ExternalLink, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Art Detector Project Report',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-light-gray dark:bg-gray-900">
      <div className="w-full max-w-4xl pt-24 md:pt-12">
        <h1 className="text-3xl font-semibold mb-4 text-charcoal dark:text-gray-100">AI Art Detector Project Report</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">March 20, 2025</p>
        
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
      </div>
    </main>
  );
}
