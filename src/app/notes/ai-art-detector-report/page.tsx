import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Art Detector Project Report',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-light-gray dark:bg-gray-900">
      <div className="w-full max-w-4xl pt-24 md:pt-12">
        <h1 className="text-3xl font-semibold mb-4 text-charcoal dark:text-gray-100">AI Art Detector Project Report</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">March 20, 2025</p>
        
        <div className="w-full aspect-[1/1.4] bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <iframe
            src="/neural_final_report.pdf"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
