'use client';

import { useEffect, useState } from 'react';
import { NavBarItems } from '../lib/navbar-items';
import Link from 'next/link';

export default function Sidebar() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    setCurrentPath(getCurrentPath());
  }, []);

  function getCurrentPath() {
    return typeof window !== 'undefined' ? window.location.pathname : '';
  }

  return (
    <nav className="w-full py-2 sm:py-0 sm:static sm:w-1/5 sm:h-auto">
      <ul className="sm:max-w-fit sm:mx-auto flex justify-evenly sm:justify-normal sm:flex-col items-center">
        {NavBarItems.items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.path}
                className={`${item.path === currentPath ? 'bg-white/30 backdrop-blur-xl' : ''} p-2 rounded-2xl my-2 transition-[width] ease-in-out flex items-center w-[52px] overflow-hidden lg:hover:w-36`}
              >
                <div className="mr-2">{item.icon}</div>
                <p className="hidden sm:block">{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
