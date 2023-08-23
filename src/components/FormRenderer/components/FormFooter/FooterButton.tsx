import React from 'react';
import { FooterButtonProps } from './types';

export const FooterButton = ({ label }: FooterButtonProps) => {
  return (
    <button
      style={{
        padding: '10px'
      }}>
      {label}
    </button>
  );
};
