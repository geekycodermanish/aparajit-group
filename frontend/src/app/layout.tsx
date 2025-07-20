import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header'; // Import Header
import Footer from '@/components/common/Footer'; // Import Footer
import '../styles/globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prime Real Estate | Find Your Dream Home',
  description: 'Premium real estate services for buyers and sellers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}