import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="App">
      <main className="App-header">{children}</main>
    </div>
  );
};
