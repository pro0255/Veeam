import React, { forwardRef } from 'react';
import { fullWidthAndHeight } from './style';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { NumberInputProps } from './types';

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ label }, ref) => {
  return (
    <input
      id={createFieldId({
        type: FormFieldEnum.number,
        label
      })}
      ref={ref}
      name={label}
      style={fullWidthAndHeight}
      type={'number'}
    />
  );
});

NumberInput.displayName = 'NumberInput';
