import React from 'react';
import { FormFooterProps } from './types';
import { ButtonRenderer, buttonRendererKey } from './ButtonRenderer';

export const FormFooter = ({ buttons }: FormFooterProps) => {
  return (
    <footer className="w-full flex flex-row border-t-2 border-gray-200 justify-center">
      <div
        style={{
          padding: '20px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
        {buttons.map((button) => {
          return <ButtonRenderer button={button} key={buttonRendererKey(button)} />;
        })}
      </div>
    </footer>
  );
};
