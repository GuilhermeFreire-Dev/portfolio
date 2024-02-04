'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiBookMarkFill, RiBox3Fill, RiGraduationCapFill, RiLightbulbFill, RiMailFill, RiUserFill } from 'react-icons/ri';

export default function Header() {
  const [page, setPage] = useState('/');
  const [fullPhoto, setFullPhoto] = useState(false);

  return (
    <div className="border border-neutral-300 bg-neutral-50 rounded-xl p-5 mb-5">
      <div className="flex items-end">
        <div
          className="w-20 h-20 rounded-full border-neutral-300 shadow-md mr-5 bg-cover bg-no-repeat cursor-pointer"
          style={{ backgroundImage: "url('/perfil.jpg')" }}
          onClick={() => {
            setFullPhoto(true);
          }}
        ></div>
        {fullPhoto && (
          <div className="absolute top-0 left-0 z-10 w-full h-screen bg-neutral-900 bg-opacity-70 flex justify-center items-center">
            <div
              className="w-80 h-80 rounded-full bg-cover bg-no-repeat flex justify-end"
              style={{ backgroundImage: "url('/perfil.jpg')" }}
            >
              <div
                className="w-10 h-10 flex justify-center items-center rounded-full bg-neutral-900 bg-opacity-80 cursor-pointer"
                onClick={() => {
                  setFullPhoto(false);
                }}
              >
                <IoClose size={32} className="text-white"></IoClose>
              </div>
            </div>
          </div>
        )}
        <div>
          <h2 className="font-bold text-lg">Guilherme Freire</h2>
          <h4 className="text-sm">Desenvolvedor de software</h4>
        </div>
      </div>
      <div className="pt-5 flex justify-between sm:justify-normal text-sm">
        <Link
          href={'/'}
          onClick={() => {
            setPage('/');
          }}
          className={page === '/' ? 'mr-4 font-bold text-teal-600' : 'mr-4'}
        >
          <p className="hidden sm:block">Sobre</p>
          <RiUserFill size={20} className="sm:hidden"></RiUserFill>
        </Link>
        <Link
          href={'/contact'}
          onClick={() => {
            setPage('/contact');
          }}
          className={
            page === '/contact' ? 'mr-4 font-bold text-teal-600' : 'mr-4'
          }
        >
          <p className="hidden sm:block">Contato</p>
          <RiMailFill size={20} className="sm:hidden"></RiMailFill>
        </Link>
        <Link
          href={'/formation'}
          onClick={() => {
            setPage('/formation');
          }}
          className={
            page === '/formation' ? 'mr-4 font-bold text-teal-600' : 'mr-4'
          }
        >
          <p className="hidden sm:block">Formação</p>
          <RiGraduationCapFill size={20} className="sm:hidden"></RiGraduationCapFill>
        </Link>
        <Link
          href={'/stack'}
          onClick={() => {
            setPage('/stack');
          }}
          className={
            page === '/stack' ? 'mr-4 font-bold text-teal-600' : 'mr-4'
          }
        >
          <p className="hidden sm:block">Stack</p>
          <RiLightbulbFill size={20} className="sm:hidden"></RiLightbulbFill>
        </Link>
        <Link
          href={'/projects'}
          onClick={() => {
            setPage('/projects');
          }}
          className={
            page === '/projects' ? 'mr-4 font-bold text-teal-600' : 'mr-4'
          }
        >
          <p className="hidden sm:block">Projetos</p>
          <RiBox3Fill size={20} className="sm:hidden"></RiBox3Fill>
        </Link>
        <Link
          href={'/experience'}
          onClick={() => {
            setPage('/experience');
          }}
          className={
            page === '/experience' ? 'mr-4 font-bold text-teal-600' : 'mr-4'
          }
        >
          <p className="hidden sm:block">Experiência</p>
          <RiBookMarkFill size={20} className="sm:hidden"></RiBookMarkFill>
        </Link>
      </div>
    </div>
  );
}
