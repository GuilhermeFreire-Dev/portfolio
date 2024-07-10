import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guilherme Freire',
  description: 'Conheça meu portfólio pessoal feito com NextJs'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black-950 text-black-50`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
