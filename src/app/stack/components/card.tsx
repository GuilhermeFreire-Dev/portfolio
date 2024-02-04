import { ReactNode } from 'react';

type Stack = {
  icon: ReactNode;
  name: string;
};

export default function Card({ stack }: { stack: Stack }) {
  return (
    <div className="border border-neutral-300 h-28 sm:mr-3 mb-3 max-w-24 rounded-lg flex flex-col justify-center items-center">
      {stack.icon}
      <p className="text-sm my-1">{stack.name}</p>
    </div>
  );
}
