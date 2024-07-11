import {
  LuBriefcase,
  LuCode2,
  LuFile,
  LuFileDown,
  LuGraduationCap,
  LuLayers
} from 'react-icons/lu';
import Typography, { Variant } from './components/tipography';
import Title from './components/title';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-3/4 mx-auto">
      <div className="my-10 flex justify-between">
        <div>
          <Typography variant={Variant.h1}>Guilherme Freire</Typography>
          <br />
          <Typography variant={Variant.h5}>
            Desenvolvedor de Software
          </Typography>
        </div>
        <div>
          <img src="/apple-avatar-2.png" className="" width={200} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 h-52">
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl col-span-2 row-span-2">
          1
        </div>
        <Link href={'/projects'} className="bg-white/30 backdrop-blur-xl rounded-3xl col-span-2 flex justify-center items-center">
          <LuCode2 size={36}></LuCode2>
          <hr className="mx-1" />
          <Typography variant={Variant.h6}>Meus projetos</Typography>
        </Link>
        <Link href={'/'} className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center">
          <LuFileDown size={36}></LuFileDown>
          <Typography variant={Variant.h6}>currículo</Typography>
        </Link>
        <Link href={'/formation'} className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center">
          <LuGraduationCap size={36}></LuGraduationCap>
          <Typography variant={Variant.h6}>formação</Typography>
        </Link>
        <Link href={'/experience'} className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center">
          <LuBriefcase size={36}></LuBriefcase>
          <Typography variant={Variant.h6}>exeriência</Typography>
        </Link>
        <Link href={'/stack'} className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center">
          <LuLayers size={36}></LuLayers>
          <Typography variant={Variant.h6}>stack</Typography>
        </Link>
      </div>
    </div>
  );
}
