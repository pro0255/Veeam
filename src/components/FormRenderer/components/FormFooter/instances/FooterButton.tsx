import React, { MouseEvent } from 'react';
import { FooterButtonProps } from '../types';
import { PREVENT_DEFAULT } from '../../../../../utils/preventDefault';

export const FooterButton = ({ label, ...props }: FooterButtonProps) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    props?.onClick?.(event);
    PREVENT_DEFAULT(event);
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px'
      }}>
      {label}
    </button>
  );
};
