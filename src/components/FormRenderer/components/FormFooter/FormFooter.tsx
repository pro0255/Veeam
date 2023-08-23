import React from 'react';
import { FormFooterProps } from './types';
import { FooterButton } from './instances/FooterButton';
import { ButtonRenderer, buttonRendererKey } from './ButtonRenderer';

export const FormFooter = ({ buttons }: FormFooterProps) => {
  return (
    <footer
      style={{
        marginTop: '20px',
        backgroundColor: 'white',
        width: '100%',
        display: 'flex'
      }}>
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
