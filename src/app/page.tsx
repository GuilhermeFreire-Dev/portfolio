import {
  LuBriefcase,
  LuCode2,
  LuFileDown,
  LuGraduationCap,
  LuLayers,
  LuUser2
} from 'react-icons/lu';
import Typography, { Variant } from './components/tipography';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="my-10 flex flex-col-reverse items-center sm:flex-row sm:justify-between">
        <div className="my-5 sm:my-0 text-center sm:text-start">
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
      <div className="grid grid-cols-3 sm:grid-cols-5 grid-rows-2 gap-4 h-52">
        <Link
          href={'/about'}
          className="bg-white/30 backdrop-blur-xl rounded-3xl sm:col-span-2 sm:row-span-2 flex flex-col justify-center items-center"
        >
          <LuUser2 className="w-8 h-8 sm:w-16 sm:h-16"></LuUser2>
          <Typography variant={Variant.h6}>sobre mim</Typography>
        </Link>
        <Link
          href={'/projects'}
          className="bg-white/30 backdrop-blur-xl rounded-3xl sm:col-span-2 flex flex-col sm:flex-row justify-center items-center"
        >
          <LuCode2 className="w-8 h-8 sm:w-9 sm:h-9"></LuCode2>
          <hr className="mx-1" />
          <Typography variant={Variant.h6}>projetos</Typography>
        </Link>
        <Link
          href={'/files/Curriculo-Guilherme-Freire.pdf'}
          target="_blank"
          download={'curriculo.pdf'}
          className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center"
        >
          <LuFileDown className="w-8 h-8 sm:w-9 sm:h-9"></LuFileDown>
          <Typography variant={Variant.h6}>currículo</Typography>
        </Link>
        <Link
          href={'/formation'}
          className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center"
        >
          <LuGraduationCap className="w-8 h-8 sm:w-9 sm:h-9"></LuGraduationCap>
          <Typography variant={Variant.h6}>formação</Typography>
        </Link>
        <Link
          href={'/experience'}
          className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center"
        >
          <LuBriefcase className="w-8 h-8 sm:w-9 sm:h-9"></LuBriefcase>
          <Typography variant={Variant.h6}>exeriência</Typography>
        </Link>
        <Link
          href={'/stack'}
          className="bg-white/30 backdrop-blur-xl rounded-3xl flex flex-col justify-center items-center"
        >
          <LuLayers className="w-8 h-8 sm:w-9 sm:h-9"></LuLayers>
          <Typography variant={Variant.h6}>stack</Typography>
        </Link>
      </div>
    </div>
  );
}
