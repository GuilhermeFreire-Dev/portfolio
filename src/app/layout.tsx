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
    <html
      lang="en"
      className="bg-cover bg-center bg-no-repeat custom-background dark:custom-background-dark"
    >
      <body
        className={`${inter.className} backdrop-blur-sm min-h-screen h-full w-full`}
      >
        <div className="w-[96vw] lg:w-[50vw] mx-auto py-5">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
