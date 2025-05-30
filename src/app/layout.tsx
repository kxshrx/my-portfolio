import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="min-h-screen flex flex-col">
          <Header />
          {children}
      </body>
    </html>
  );
}
