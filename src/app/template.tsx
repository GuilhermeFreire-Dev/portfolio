'use client';
import { useEffect, useState } from 'react';
import Sidebar from './components/navbar';
import Header from './components/header';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <>
      <Header isHome={isHome}></Header>
      <main
        className={`flex flex-col-reverse ${isHome ? 'justify-end' : 'justify-between'} row-span-9 sm:flex-row sm:justify-center`}
      >
        {!isHome && <Sidebar></Sidebar>}
        <section
          className={`w-full p-3 mr-3 sm:w-4/5 sm:h-[88vh] overflow-y-scroll`}
        >
          {children}
        </section>
      </main>
      <footer className={`${isHome ? 'block' : 'hidden'} px-2 opacity-20`}>
        <small>v1.1.0</small> <small>{'16/07/2024'}</small>
      </footer>
    </>
  );
}
