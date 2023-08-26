import React, { forwardRef } from 'react';
import { createFieldId } from '../../../utils/createFieldId';
import { FormFieldEnum } from '../fieldTypeToComponent';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => {
  return (
    <input
      className="w-full p-4 border-solid border-2 border-gray-300 rounded hover:bg-gray-200 focus:bg-white focus:ring-0 hover:animate-make-bigger"
      id={createFieldId({
        type: FormFieldEnum.string,
        label
      })}
      name={label}
      ref={ref}
      type={'text'}
    />
  );
});

Input.displayName = 'Input';
