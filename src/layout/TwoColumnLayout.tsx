import React from 'react';
import { ReactNode } from 'react';

type Props = {
  left: ReactNode;
  right: ReactNode;
};

export const TwoColumnLayout = ({ left, right }: Props) => {
  return (
    <section
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px'
      }}>
      <div
        style={{
          padding: '40px'
        }}>
        {left}
      </div>
      <div
        style={{
          padding: '40px'
        }}>
        {right}
      </div>
    </section>
  );
};
