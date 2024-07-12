'use client';
import { useEffect, useState } from 'react';
import Sidebar from './components/navbar';
import Header from './components/header';
import { parse } from './helpers/dateTime';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <>
      <Header isHome={isHome}></Header>
      <main className="flex flex-col-reverse sm:flex-row sm:justify-center">
        {!isHome && <Sidebar></Sidebar>}
        <section
          className={`w-full sm:w-4/5 p-3 ${isHome ? 'h-[84vh]' : 'h-[80vh]'} mr-3 sm:h-[86vh] overflow-y-scroll`}
        >
          {children}
        </section>
      </main>
      <footer className={`${isHome ? 'block' : 'hidden'} px-2 opacity-20`}>
        <small>v1.1.0</small> <small>{parse(new Date().toISOString())}</small>
      </footer>
    </>
  );
}
