'use client';
import { LuGithub, LuLinkedin } from 'react-icons/lu';


export default function Header() {
  return (
    <header className='flex justify-between p-6 mb-10'>
      <div>
        <h3>Guilherme Freire | Desenvolvedor Fullstack</h3>
      </div>
      <div className='flex'>
        <LuGithub size={28}></LuGithub>
        <hr className='mx-3' />
        <LuLinkedin size={28}></LuLinkedin>
      </div>
    </header>
  )
}
