import React, { forwardRef } from 'react';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { NumberInputProps } from './types';

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ label }, ref) => {
  return (
    <input
      className="w-full p-4 border-solid border-2 border-gray-300 rounded hover:bg-gray-200 focus:bg-white focus:ring-0 hover:animate-make-bigger"
      id={createFieldId({
        type: FormFieldEnum.number,
        label
      })}
      ref={ref}
      name={label}
      type={'number'}
    />
  );
});

NumberInput.displayName = 'NumberInput';
