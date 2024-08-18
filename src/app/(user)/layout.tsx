import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import '../style/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bloggers App | Your blogging guideline',
  description: 'This is the Bloggers app boundary',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#168C61" height={3} speed={200} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
