import { ReactNode } from 'react';

export enum Variant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export default function Typography({
  variant,
  children
}: {
  variant: Variant;
  children: ReactNode;
}) {
  function getText() {
    switch (variant) {
      case Variant.h1:
        return <h1 className="text-2xl lg:text-3xl font-bold">{children}</h1>;
      case Variant.h2:
        return <h2 className="text-xl lg:text-2xl font-bold">{children}</h2>;
      case Variant.h3:
        return <h3 className="text-lg lg:text-xl font-bold">{children}</h3>;
      case Variant.h4:
        return <h4 className="text-lg lg:text-xl font-semibold">{children}</h4>;
      case Variant.h5:
        return <h5 className="text-base lg:text-lg font-bold">{children}</h5>;
      case Variant.h6:
        return (
          <h6 className="text-base lg:text-lg font-semibold">{children}</h6>
        );
      default:
        return <p>{children}</p>;
    }
  }

  return getText();
}
