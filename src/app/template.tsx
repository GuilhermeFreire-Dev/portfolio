'use client';
import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <>
      <Header isHome={isHome}></Header>
      <main className="flex justify-center">
        {!isHome && <Sidebar></Sidebar>}
        <section className="w-4/5 p-3 mr-3 max-h-[80vh] overflow-hidden">
          {children}
        </section>
      </main>
    </>
  );
}
