import React, { MouseEvent } from 'react';
import { FooterButtonProps } from '../types';
import { PREVENT_DEFAULT } from '../../../../../utils/preventDefault';
import { Button } from '../../../../Button';

type Props = {
  className?: string;
};

export const FooterButton = ({ label, ...props }: FooterButtonProps & Props) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    props?.onClick?.(event);
    PREVENT_DEFAULT(event);
  };

  return (
    <Button onClick={onClick} {...props}>
      {label}
    </Button>
  );
};
