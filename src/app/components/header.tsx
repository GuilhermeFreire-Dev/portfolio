'use client';
import Link from 'next/link';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import Typography, { Variant } from './tipography';

export default function Header({ isHome }: { isHome: boolean }) {
  return (
    <header
      className="flex justify-between items-center py-6 mb-2 mx-3 sm:mb-10 sm:w-4/5 sm:mx-auto"
      style={isHome ? { justifyContent: 'flex-end' } : {}}
    >
      <Link href={'/'} className={isHome ? 'hidden' : 'w-56 sm:w-auto'}>
        <Typography variant={Variant.h6}>
          Guilherme Freire | Desenvolvedor de Software
        </Typography>
      </Link>
      <div className="flex">
        <Link href={'https://github.com/GuilhermeFreire-Dev/'}>
          <LuGithub size={28}></LuGithub>
        </Link>
        <hr className="mx-3" />
        <Link href={'https://linkedin.com/in/guilhermefreiremagalhaes'}>
          <LuLinkedin size={28}></LuLinkedin>
        </Link>
      </div>
    </header>
  );
}
