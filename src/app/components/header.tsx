'use client';
import Link from 'next/link';
import Typography, { Variant } from './tipography';
import { Content } from '../lib/content';

export default function Header({ isHome }: { isHome: boolean }) {
  return (
    <header
      className={`flex ${isHome ? 'justify-end' : 'justify-between'} items-center py-6 mb-2 mx-3 sm:mb-10 sm:w-4/5 sm:mx-auto`}
    >
      <Link href={'/'} className={isHome ? 'hidden' : 'w-56 sm:w-auto'}>
        <Typography variant={Variant.h6}>
          Guilherme Freire | Desenvolvedor de Software
        </Typography>
      </Link>
      <div className="flex">
        {Content.platforms.map((platform, index) => {
          return (
            <Link
              href={platform.url}
              key={index}
              target="_blank"
              className="mx-2"
            >
              {platform.icon}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
