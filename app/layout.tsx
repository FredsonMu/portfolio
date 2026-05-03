import type {Metadata} from 'next';
import { Outfit, Italiana, JetBrains_Mono } from 'next/font/google';
import { FigmaCursor } from '../components/FigmaCursor';
import './globals.css';

const fontSans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontDecorative = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Fredson Munguambe | Digital Solutions & AI-Driven Thinker',
  description: 'Premium portfolio of Fredson Munguambe. Informatics & Business Management, combining technology and business thinking to solve real-world problems.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDecorative.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans flex text-[#0c0c0c] bg-[#EBE9E1] min-h-screen" suppressHydrationWarning>
        <FigmaCursor />
        <div className="noise"></div>
        {children}
      </body>
    </html>
  );
}
