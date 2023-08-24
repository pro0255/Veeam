import React, { forwardRef } from 'react';
import { fullWidthAndHeight } from './style';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => {
  return (
    <input
      id={createFieldId({
        type: FormFieldEnum.string,
        label
      })}
      name={label}
      ref={ref}
      style={fullWidthAndHeight}
      type={'text'}
    />
  );
});

Input.displayName = 'Input';
