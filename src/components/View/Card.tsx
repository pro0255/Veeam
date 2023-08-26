import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div className="flex flex-col max-w-4xl min-w-[60%] shadow-xl">{children}</div>;
};
