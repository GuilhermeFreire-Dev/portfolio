'use client';

import { LuBriefcase, LuCode2, LuGraduationCap, LuLayers, LuUser2 } from "react-icons/lu";
import { SideBarItems } from "../lib/sidebar-items";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const sidebar_items = SideBarItems.items;
  const [currentIdx, setCurrentIdx] = useState(currentPath());

  useEffect(() => {
    setCurrentIdx(currentPath());
  }, [])

  function currentPath() {
    return typeof window !== 'undefined' ? window.location.pathname : '';
  }

  return (
    <nav className="w-1/5 flex justify-center">
      <ul className="max-w-fit">
        {
          sidebar_items.map((item, index) => {
            return (
              <li className={item.path === currentPath() ? 
                  "bg-yellow-sea-600 p-2 rounded-2xl my-3" 
                  : 
                  "p-2 rounded-2xl my-3"} 
                key={index}>
                <Link href={item.path}>
                  { item.icon }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
