import { ReactNode } from 'react';

type Stack = {
  icon: ReactNode;
  name: string;
};

export default function Card({ stack }: { stack: Stack }) {
  return (
    <div className="h-28 max-w-24 rounded-lg flex flex-col justify-center items-center">
      {stack.icon}
      <p className="text-sm my-1">{stack.name}</p>
    </div>
  );
}
