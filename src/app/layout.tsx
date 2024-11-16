import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/custom/header';
import { NavigationBar } from '@/components/custom/nav';
import { CryptoEnergyProvider } from './context/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CryptoEnergyProvider>
          <main className="py-4 px-8">
            <Header />
            {children}
            <NavigationBar />
          </main>
        </CryptoEnergyProvider>
      </body>
    </html>
  );
}
