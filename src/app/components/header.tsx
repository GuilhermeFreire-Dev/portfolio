'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

export default function Header({ isHome }: { isHome: boolean }) {
  return (
    <header
      className="flex justify-between py-6 mb-10 w-4/5 mx-auto"
      style={isHome ? { justifyContent: 'flex-end' } : {}}
    >
      <Link href={'/'} className={isHome ? 'hidden' : ''}>
        <h3>Guilherme Freire | Desenvolvedor de Software</h3>
      </Link>
      <div className="flex">
        <LuGithub size={28}></LuGithub>
        <hr className="mx-3" />
        <LuLinkedin size={28}></LuLinkedin>
      </div>
    </header>
  );
}
