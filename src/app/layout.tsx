import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import SideNav from '../components/SideNav';
import MobileHeader from '../components/MobileHeader';
import Waveform from '../components/DynamicWaveform';
import { ThemeProvider } from '../components/ThemeProvider';

const themeScript = `
(function() {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.add('light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider>
          <div className="hidden md:block">
            <SideNav />
          </div>
          <MobileHeader />
          <Waveform />
          <div className="md:ml-56">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
