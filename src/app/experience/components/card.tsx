import { FaRegClock } from 'react-icons/fa';

type Position = {
  name: string;
  duration: string;
  attributions: Array<String>;
  location: string
};

export default function Card({ position }: { position: Position }) {
  return (
    <div className="border border-neutral-300 rounded-lg px-5 py-2 my-3">
      <div className="grid grid-cols-2 gap-1 items-center sm:flex">
        <h4 className="text-sm sm:text-base font-medium mr-3">{position.name}</h4>
        <div className="flex items-center">
          <span className="flex items-center">
            <FaRegClock size={14}></FaRegClock>
            <p className="text-xs sm:text-sm ml-1">{position.duration}</p>
          </span>
          <i className="text-xs ml-2">{position.location}</i>
        </div>
      </div>
      <ul className="text-xs sm:text-sm my-3 list-disc ml-5">
        {position.attributions.map((attribution) => {
          return <li>{attribution}</li>;
        })}
      </ul>
    </div>
  );
}
