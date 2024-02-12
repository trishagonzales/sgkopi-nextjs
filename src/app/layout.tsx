import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'SG Kopi',
  description:
    'Fuel your Pagsanjan adventure with a stop to our coffee shop, offering a range of beverages made with premium Singapore-sourced coffee beans paired with indulgent treats.',
};

export default function RootLayout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        {navbar}
        {children}
      </body>
    </html>
  );
}
