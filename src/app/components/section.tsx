import { ReactNode } from 'react';
import Typography, { Variant } from './tipography';

export default function Section({
  title,
  children
}: Readonly<{ title: string; children: ReactNode }>) {
  return (
    <>
      <Typography variant={Variant.h1}>{ title }</Typography>
      <br />
      { children }
    </>
  );
}
