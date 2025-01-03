import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/custom/header';
import { NavigationBar } from '@/components/custom/nav';
import { CryptoEnergyProvider } from '../context/provider';
import { I18nProvider } from '@/core/i18n/provider';
import { Root } from '@/components/custom/root';

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
          <Header />
          <main className="py-4 px-8">
            <I18nProvider>
              <Root>
                {children}
              </Root>
            </I18nProvider>
          </main>
          <NavigationBar />
        </CryptoEnergyProvider>
      </body>
    </html>
  );
}
