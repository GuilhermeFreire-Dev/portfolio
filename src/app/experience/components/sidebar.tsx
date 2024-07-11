'use client';
import Typography, { Variant } from '@/app/components/tipography';
import { toDate, yearsInterval } from '@/app/helpers/dateTime';
import { LuX } from 'react-icons/lu';

type Experience = {
  actual: boolean;
  company: string;
  office: string;
  start_at: string;
  end_at: string;
  location: string;
  tecnologies: Array<any>;
  activities: Array<any>;
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
    state && (
      <div className="absolute top-0 left-0 flex justify-end w-full h-full bg-black-950 bg-opacity-50">
        <div className="w-1/4 h-full p-4 bg-black-900">
          <div className="mb-5">
            <button onClick={handle}>
              <LuX size={28}></LuX>
            </button>
          </div>
          <div>
            <Typography variant={Variant.h2}>{content.company}</Typography>
            <Typography variant={Variant.h6}>{content.office}</Typography>
            <p>{yearsInterval(content.start_at, content.end_at)}</p>
            <br />
            <Typography variant={Variant.h3}>Tecnologias utilizadas</Typography>
            <ul className="ml-5">
              {content.tecnologies.map((tecnology) => {
                return <li className="list-disc">{tecnology}</li>;
              })}
            </ul>
            <br />
            <Typography variant={Variant.h3}>Atividades realizadas</Typography>
            <ul className="ml-5">
              {content.activities.map((activity) => {
                return <li>{activity}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}
