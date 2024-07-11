'use client';

import { SideBarItems } from '../lib/sidebar-items';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const sidebar_items = SideBarItems.items;
  const [currentIdx, setCurrentIdx] = useState(currentPath());

  useEffect(() => {
    setCurrentIdx(currentPath());
  }, []);

  function currentPath() {
    return typeof window !== 'undefined' ? window.location.pathname : '';
  }

  return (
    <nav className="w-1/5">
      <ul className="max-w-fit mx-auto flex flex-col items-center">
        {sidebar_items.map((item, index) => {
          return (
            <li
              className={
                item.path === currentPath()
                  ? 'bg-white/30 backdrop-blur-xl p-2 rounded-2xl my-2'
                  : 'p-2 rounded-2xl my-2'
              }
              key={index}
            >
              <Link
                href={item.path}
                className=" transition-[width] ease-in-out delay-150 flex items-center w-9 overflow-hidden hover:w-36"
              >
                <div className="mr-2">{item.icon}</div>
                <p>{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
