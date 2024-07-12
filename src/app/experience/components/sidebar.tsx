'use client';
import Typography, { Variant } from '@/app/components/tipography';
import { yearsInterval } from '@/app/helpers/dateTime';
import { LuX } from 'react-icons/lu';

type Experience = {
  actual: boolean;
  company: string;
  office: string;
  start_at: string;
  end_at: string;
  location: string;
  tecnologies: Array<string>;
  activities: Array<string>;
};

export default function SideBar({
  handle,
  state,
  content
}: {
  handle: VoidFunction;
  state: boolean;
  content: Experience;
}) {
  return (
    <div
      className={`absolute top-0 right-0 flex justify-end ${state ? 'w-screen' : 'w-0'} h-screen bg-black-950 bg-opacity-50 overflow-hidden`}
    >
      <div
        className={`transition-[width] ease-in h-full p-4 bg-stone-900 overflow-y-scroll ${state ? 'w-5/6 sm:w-1/4' : 'w-0'}`}
      >
        <div className="mb-5">
          <button onClick={handle}>
            <LuX size={28}></LuX>
          </button>
        </div>
        {state && (
          <div>
            <Typography variant={Variant.h2}>{content.company}</Typography>
            <Typography variant={Variant.h6}>{content.office}</Typography>
            <p>{yearsInterval(content.start_at, content.end_at)}</p>
            <br />
            <Typography variant={Variant.h3}>Tecnologias utilizadas</Typography>
            <ul className="ml-5">
              {content.tecnologies.map((tecnology, index) => {
                return (
                  <li className="list-disc" key={index}>
                    {tecnology}
                  </li>
                );
              })}
            </ul>
            <br />
            <Typography variant={Variant.h3}>Atividades realizadas</Typography>
            <ul className="ml-5">
              {content.activities.map((activity, index) => {
                return (
                  <li className="list-disc" key={index * 1000}>
                    {activity}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
