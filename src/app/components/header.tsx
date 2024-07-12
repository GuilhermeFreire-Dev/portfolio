'use client';
import Link from 'next/link';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

export default function Header({ isHome }: { isHome: boolean }) {
  return (
    <header
      className="flex justify-between items-center py-6 mb-2 mx-3 sm:mb-10 sm:w-4/5 sm:mx-auto"
      style={isHome ? { justifyContent: 'flex-end' } : {}}
    >
      <Link href={'/'} className={isHome ? 'hidden' : 'w-56 sm:w-auto'}>
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
