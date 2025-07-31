import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header'; // Import Header
import Footer from '@/components/common/Footer'; // Import Footer
import '../styles/globals.css'; // Global styles
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aparajit Group | Build Premium',
  description: 'High Quality Premium Building and Development Solutions',
  icons: {
    icon: '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TWF0P8NEM6" strategy="afterInteractive"></Script>
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TWF0P8NEM6');`}
        </Script>

      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}